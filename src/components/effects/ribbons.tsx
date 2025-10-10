'use client'

import { useEffect, useRef } from 'react'
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl'
import { cn } from '@/lib/utils'

const vertexShader = `
  precision highp float;

  attribute vec3 position;
  attribute vec3 next;
  attribute vec3 prev;
  attribute vec2 uv;
  attribute float side;

  uniform vec2 uResolution;
  uniform float uDPR;
  uniform float uThickness;
  uniform float uTime;
  uniform float uEnableShaderEffect;
  uniform float uEffectAmplitude;

  varying vec2 vUv;

  vec4 getPosition() {
    vec4 current = vec4(position, 1.0);
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 nextScreen = next.xy * aspect;
    vec2 prevScreen = prev.xy * aspect;
    vec2 tangent = normalize(nextScreen - prevScreen);
    vec2 normal = vec2(-tangent.y, tangent.x);
    normal /= aspect;
    normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
    float dist = length(nextScreen - prevScreen);
    normal *= smoothstep(0.0, 0.02, dist);
    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
    float pixelWidth = current.w * pixelWidthRatio;
    normal *= pixelWidth * uThickness;
    current.xy -= normal * side;
    if (uEnableShaderEffect > 0.5) {
      current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
    }
    return current;
  }

  void main() {
    vUv = uv;
    gl_Position = getPosition();
  }
`

const fragmentShader = `
  precision highp float;

  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uEnableFade;

  varying vec2 vUv;

  void main() {
    float fadeFactor = 1.0;
    if (uEnableFade > 0.5) {
      fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUv.y);
    }
    gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
  }
`

type RibbonsProps = {
  className?: string
  colors?: string[]
  baseSpring?: number
  baseFriction?: number
  baseThickness?: number
  offsetFactor?: number
  maxAge?: number
  pointCount?: number
  speedMultiplier?: number
  enableFade?: boolean
  enableShaderEffect?: boolean
  effectAmplitude?: number
  backgroundColor?: [number, number, number, number]
}

type RibbonLine = {
  spring: number
  friction: number
  mouseVelocity: Vec3
  mouseOffset: Vec3
  points: Vec3[]
  polyline: Polyline
}

export function Ribbons({
  className,
  colors = ['#FC8EAC'],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}: RibbonsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const colorsKey = JSON.stringify(colors)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      dpr: window.devicePixelRatio ?? 2,
      alpha: true,
    })
    const { gl } = renderer

    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3])
    } else {
      gl.clearColor(0, 0, 0, 0)
    }

    const canvas = gl.canvas as HTMLCanvasElement
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    const scene = new Transform()
    const lines: RibbonLine[] = []

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      lines.forEach((line) => line.polyline.resize())
    }

    window.addEventListener('resize', resize)

    const palette: string[] = JSON.parse(colorsKey)
    const centerIndex = (palette.length - 1) / 2
    palette.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05
      const friction = baseFriction + (Math.random() - 0.5) * 0.05
      const thickness = baseThickness + (Math.random() - 0.5) * 3
      const mouseOffset = new Vec3(
        (index - centerIndex) * offsetFactor + (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.1,
        0
      )

      const points = Array.from({ length: pointCount }, () => new Vec3())
      const polyline = new Polyline(gl, {
        points,
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 1.0 },
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 },
        },
      })

      const line: RibbonLine = {
        spring,
        friction,
        mouseVelocity: new Vec3(),
        mouseOffset,
        points,
        polyline,
      }

      line.polyline.mesh.setParent(scene)
      lines.push(line)
    })

    resize()

    const mouse = new Vec3()
    const updatePointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const width = rect.width || 1
      const height = rect.height || 1

      mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0)
    }

    window.addEventListener('pointermove', updatePointer)
    window.addEventListener('pointerdown', updatePointer)

    const tmp = new Vec3()
    let frameId = 0
    let lastTime = performance.now()

    const update = () => {
      frameId = requestAnimationFrame(update)
      const currentTime = performance.now()
      const delta = currentTime - lastTime
      lastTime = currentTime

      lines.forEach((line) => {
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring)
        line.mouseVelocity.add(tmp).multiply(line.friction)
        line.points[0].add(line.mouseVelocity)

        for (let pointIndex = 1; pointIndex < line.points.length; pointIndex++) {
          if (Number.isFinite(maxAge) && maxAge > 0) {
            const segmentDelay = maxAge / Math.max(1, line.points.length - 1)
            const alpha = Math.min(1, (delta * speedMultiplier) / segmentDelay)
            line.points[pointIndex].lerp(line.points[pointIndex - 1], alpha)
          } else {
            line.points[pointIndex].lerp(line.points[pointIndex - 1], 0.9)
          }
        }

        const timeUniform = line.polyline.mesh.program.uniforms.uTime
        if (timeUniform) {
          timeUniform.value = currentTime * 0.001
        }

        line.polyline.updateGeometry()
      })

      renderer.render({ scene })
    }

    update()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('pointerdown', updatePointer)
      cancelAnimationFrame(frameId)
      if (canvas.parentNode === container) {
        container.removeChild(canvas)
      }
    }
  }, [
    colorsKey,
    backgroundColor,
    baseSpring,
    baseFriction,
    baseThickness,
    effectAmplitude,
    enableFade,
    enableShaderEffect,
    maxAge,
    offsetFactor,
    pointCount,
    speedMultiplier,
  ])

  return <div ref={containerRef} className={cn('pointer-events-none absolute inset-0', className)} />
}

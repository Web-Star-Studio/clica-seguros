'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Clock, CheckCircle, Zap, Lock, TrendingUp } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-10 -top-12 h-40 w-40 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-accent-emerald-green/30 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
    </div>
  )
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds
        if (totalSeconds <= 0) {
          return prev
        }
        const nextTotal = totalSeconds - 1
        return {
          hours: Math.floor(nextTotal / 3600),
          minutes: Math.floor((nextTotal % 3600) / 60),
          seconds: nextTotal % 60,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-3 text-white mt-10">
      <Clock className="h-5 w-5 text-white/90" />
      <div className="flex gap-2 text-base font-semibold">
        {(['hours', 'minutes', 'seconds'] as const).map((unit) => (
          <div key={unit} className="flex items-center">
            <div className="rounded-lg bg-black px-3 py-1">
              {String(timeLeft[unit]).padStart(2, '0')}
            </div>
            {unit !== 'seconds' && <span className="px-1">:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20">
      <div className="app-container">
        <motion.div
          className="relative mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#3d55ff] to-accent-emerald-green/35 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16"
          style={{ scale, opacity }}
        >
          <AnimatedBackground />

          <motion.div
            className="absolute left-6 top-6 sm:left-8 sm:top-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Badge variant="secondary" className="bg-white/90 text-neutral-charcoal backdrop-blur-sm">
              <Zap className="mr-1 h-3 w-3" />
              Oferta por tempo limitado
            </Badge>
          </motion.div>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-left"
            >
              <CountdownTimer />
              <div>
                <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                  Que tal
                  <span className="relative mx-2 inline-block">
                    <span className="relative z-10"> economizar </span>
                    <motion.span
                      className="absolute inset-0 -rotate-2 rounded-lg bg-white/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.4 }}
                    />
                  </span>
                  até 40%?
                </h2>
                <p className="max-w-2xl text-base text-white/85 md:text-lg">
                  Faça uma simulação agora e descubra quanto você pode economizar com a proteção ideal para o seu carro.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full rounded-3xl bg-white p-6 text-neutral-charcoal shadow-2xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="mb-6 text-center">
                <p className="mt-2 text-sm font-bold text-black sm:text-base">Sem compromisso, 100% online</p>
              </div>

              <div className="grid gap-3 text-sm text-neutral-medium-gray sm:grid-cols-3">
                {['Sem compromisso de contratação', 'Resultado em menos de 3 minutos', 'Compare com outras seguradoras'].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent-emerald-green" />
                      <span>{benefit}</span>
                    </div>
                  ),
                )}
              </div>


              <Button asChild size="lg" variant="brand" className="mt-10 w-full py-3 text-sm sm:py-4 sm:text-base">
                <a href={quiverOnUrl}>
                  <span className="flex items-center justify-center gap-2">
                    Comece sua Cotação
                  </span>
                </a>
              </Button>

              <p className="mt-6 border-t border-neutral-light-gray pt-4 text-center text-xs leading-relaxed text-neutral-medium-gray">
                Ao continuar, você concorda com nossos{' '}
                <a href="#" className="font-medium text-primary hover:underline">
                  termos de uso
                </a>{' '}
                e{' '}
                <a href="#" className="font-medium text-primary hover:underline">
                  política de privacidade
                </a>
              </p>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <svg viewBox="0 0 1440 120" className="w-full">
              <motion.path
                d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
                fill="rgba(255,255,255,0.1)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 text-white/85 sm:flex-row sm:flex-wrap sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm">Dados protegidos</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            <span className="text-sm">SSL Certificado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">Empresa regulamentada</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/central-de-ajuda', label: 'Central de Ajuda' },
  { href: '/tutoriais', label: 'Tutoriais' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [desktopButtonLeft, setDesktopButtonLeft] = useState<number | null>(null)
  const desktopButtonRef = useRef<HTMLDivElement | null>(null)
  const quiverOnUrl =
    process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

  useEffect(() => {
    const updateFloatingState = () => {
      setShowFloatingButton(window.scrollY > 140)
    }

    const updateDesktopButtonPosition = () => {
      if (desktopButtonRef.current) {
        const rect = desktopButtonRef.current.getBoundingClientRect()
        setDesktopButtonLeft(rect.left)
      }
    }

    updateFloatingState()
    updateDesktopButtonPosition()

    window.addEventListener('scroll', updateFloatingState)
    window.addEventListener('resize', updateDesktopButtonPosition)

    return () => {
      window.removeEventListener('scroll', updateFloatingState)
      window.removeEventListener('resize', updateDesktopButtonPosition)
    }
  }, [])

  return (
    <>
      <header className="relative z-20 w-full bg-transparent">
        <div className="app-container flex h-[88px] items-center justify-between gap-6 lg:h-[124px] lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Logotipo Clica seguros - Azul Intermediário.png"
              alt="Clica Seguros Logo"
              width={1839}
              height={591}
              className="w-28 lg:w-32"
              priority
            />
          </Link>

          <nav className="hidden items-center justify-center lg:flex">
            <ul className="flex items-center gap-14 text-base font-medium text-neutral-charcoal/90">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center justify-end lg:flex" ref={desktopButtonRef}>
            <Button
              asChild
              className="group rounded-full border border-white/70 bg-white px-8 py-4 text-sm font-semibold text-neutral-charcoal shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.16)]"
            >
              <a href={quiverOnUrl} className="flex items-center gap-3">
                Faça sua cotação
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 text-neutral-charcoal transition-colors hover:bg-neutral-light-gray/40"
              whileTap={{ scale: 0.95 }}
              aria-label="Abrir menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-neutral-light-gray/40 bg-white/95 backdrop-blur lg:hidden"
            >
              <div className="app-container py-6">
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-full px-4 py-3 text-base font-medium text-neutral-charcoal transition-colors hover:bg-neutral-light-gray/40 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {showFloatingButton && desktopButtonLeft !== null && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto fixed z-30 hidden lg:block"
            style={{ top: 32, left: desktopButtonLeft }}
          >
            <Button
              asChild
              className="group rounded-full border border-white/70 bg-white px-8 py-4 text-sm font-semibold text-neutral-charcoal shadow-[0_22px_50px_rgba(15,23,42,0.18)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_26px_58px_rgba(15,23,42,0.22)]"
            >
              <a href={quiverOnUrl} className="flex items-center gap-3">
                Faça sua cotação
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-30 flex lg:hidden">
        <Button
          asChild
          className="group rounded-full border border-white/70 bg-white px-6 py-3 text-base font-semibold text-neutral-charcoal shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.2)]"
        >
          <a href={quiverOnUrl} className="flex items-center gap-3">
            Faça sua cotação
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </div>
    </>
  )
}

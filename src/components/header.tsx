'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { 
  Menu, 
  X, 
  FileText,
  Youtube,
  MessageCircle,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const navLinks = [
  {
    href: '/blog',
    label: 'Blog',
    icon: FileText,
  },
  {
    href: '/central-de-ajuda',
    label: 'Central de Ajuda',
    icon: MessageCircle,
  },
  {
    href: '/tutoriais',
    label: 'Tutoriais',
    icon: Youtube,
  },
]


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64])
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full overflow-visible transition-all ${
        isScrolled 
          ? 'border-b border-neutral-light-gray/50 shadow-lg' 
          : ''
      }`}
      style={{
        height: headerHeight,
        backgroundColor: `rgba(248, 248, 246, ${headerOpacity})`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="app-container flex h-full items-center justify-between gap-8 overflow-visible">
        {/* Logo with animation */}
        <Link href="/" className="group flex items-center space-x-2">
          <motion.div
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Clica Seguros.png"
              alt="Clica Seguros Logo"
              width={100}
              height={100}
              className="h-24 w-24"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-10 rounded-full border border-neutral-light-gray/60 bg-white/80 px-10 py-3 shadow-sm backdrop-blur">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="group flex items-center gap-2 text-sm font-semibold text-neutral-charcoal transition-all duration-200 hover:text-primary"
              >
                <link.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden lg:flex">
          <Button
            asChild
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <a href={quiverOnUrl}>
              Simule agora
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto lg:hidden">
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="rounded-md p-2 text-neutral-charcoal"
            whileTap={{ scale: 0.95 }}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-neutral-light-gray/50 bg-white lg:hidden"
          >
            <div className="app-container py-6">
              {/* Mobile Nav */}
              <nav className="space-y-3 rounded-2xl border border-neutral-light-gray/60 bg-white/80 p-4 shadow-sm backdrop-blur">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-neutral-dark-gray transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 

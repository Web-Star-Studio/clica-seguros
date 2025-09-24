'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Shield,
  Car,
  CreditCard,
  FileText,
  Users,
  Headphones,
  BookOpen,
  Youtube,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const navLinks = [
  { 
    href: '#produtos', 
    label: 'Produtos',
    icon: Shield,
    submenu: [
      { label: 'Seguro Auto', href: '#auto', icon: Car, description: 'Proteção completa para seu veículo' },
      { label: 'Seguro Moto', href: '#moto', icon: Zap, description: 'Cobertura especializada para motos' },
      { label: 'Proteção Celular', href: '#celular', icon: Shield, description: 'Seu smartphone sempre protegido' },
    ]
  },
  { 
    href: '#solucoes', 
    label: 'Soluções',
    icon: Sparkles,
    submenu: [
      { label: 'Para Você', href: '#pessoal', icon: Users, description: 'Planos individuais personalizados' },
      { label: 'Para Empresas', href: '#empresas', icon: TrendingUp, description: 'Soluções corporativas flexíveis' },
      { label: 'Para Parceiros', href: '#parceiros', icon: Headphones, description: 'Programa de parceria lucrativo' },
    ]
  },
  { 
    href: '#recursos', 
    label: 'Recursos',
    icon: BookOpen,
    submenu: [
      { label: 'Central de Ajuda', href: '#ajuda', icon: MessageCircle, description: 'Tire suas dúvidas rapidamente' },
      { label: 'Blog', href: '#blog', icon: FileText, description: 'Dicas e novidades do mercado' },
      { label: 'Tutoriais', href: '#tutoriais', icon: Youtube, description: 'Aprenda com vídeos práticos' },
    ]
  },
]

// Mega menu component
function MegaMenu({ item, isOpen }: { item: typeof navLinks[0], isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && item.submenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-1/2 top-full mt-2 w-[80rem] -translate-x-1/2 transform z-50"
        >
          <div className="rounded-2xl border border-neutral-light-gray/50 bg-white px-8 py-10 shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {item.submenu.map((subitem, index) => (
                <motion.a
                  key={subitem.href}
                  href={subitem.href}
                  className="group flex gap-5 rounded-xl p-5 transition-all hover:bg-neutral-light-gray/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className=" rounded-xl transition-all group-hover:scale-110">
                    <subitem.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-base font-semibold text-neutral-charcoal transition-colors group-hover:text-primary">
                      {subitem.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-medium-gray">
                      {subitem.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-light-gray opacity-0 transition-all group-hover:translate-x-2 group-hover:text-primary group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
            
            {/* Featured section */}
            <motion.div
              className="mt-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent-emerald-green/5 p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex-1">
                  <Badge variant="primary" className="mb-3">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Novidade
                  </Badge>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Simule em apenas 3 minutos
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-medium-gray">
                    Faça uma cotação rápida e descubra quanto pode economizar com nossos planos
                  </p>
                </div>
                <Link href="/simulacao">
                  <Button size="default" className="group whitespace-nowrap">
                    Simular agora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64])
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  
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
      <div className="app-container flex h-full items-center gap-6 overflow-visible">
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
        <nav className="hidden flex-1 items-center justify-center space-x-10 overflow-visible lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setActiveMenu(link.href)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link 
                href={link.href} 
                className="flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-neutral-charcoal"
              >
                {link.label}
                {link.submenu && (
                  <motion.div
                    animate={{ rotate: activeMenu === link.href ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                )}
              </Link>
              
              {/* Active indicator */}
              {activeMenu === link.href && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <MegaMenu item={link} isOpen={activeMenu === link.href} />
            </div>
          ))}
        </nav>

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
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link 
                      href={link.href} 
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-neutral-dark-gray transition-colors hover:bg-neutral-light-gray/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </span>
                      {link.submenu && <ChevronDown className="h-4 w-4" />}
                    </Link>
                    
                    {link.submenu && (
                      <div className="ml-12 mt-2 space-y-2">
                        {link.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block rounded-lg px-4 py-2 text-sm text-neutral-medium-gray hover:text-neutral-charcoal"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Ribbons } from '@/components/effects/ribbons'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

const autoHighlights = [
  {
    title: 'Coberturas sob medida',
    description: 'Planos flexíveis para veículos novos, seminovos e carros de aplicativo.',
  },
  {
    title: 'Assistência 24h em todo o Brasil',
    description: 'Reboque, chaveiro, troca de pneus e ajuda emergencial a qualquer hora.',
  },
  {
    title: 'Tecnologia que reduz sua mensalidade',
    description: 'Análise inteligente de perfil para oferecer economia sustentável.',
  },
]

const autoSupportLinks = [
  { label: 'Simular seguro', href: quiverOnUrl, external: true },
  { label: 'Comparar coberturas', href: '#como-funciona' },
  { label: 'Assistência 24h', href: '#sinistro' },
  { label: 'Blog Seguro Auto', href: '/blog' },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden border-t border-neutral-light-gray bg-neutral-off-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <Ribbons
          className="opacity-50"
          colors={['#4667ff', '#7f7bf2', '#5fcff2', '#8fffe9']}
          baseThickness={20}
          speedMultiplier={0.58}
          maxAge={600}
          enableFade
          enableShaderEffect
          effectAmplitude={1.1}
        />
      </div>
      <div className="app-container relative z-10 space-y-16 py-16">

        <div className="grid gap-10 rounded-3xl border border-neutral-light-gray/80 bg-white/95 p-8 shadow-sm backdrop-blur md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-neutral-charcoal">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">Cobertura nacional</p>
                <p className="text-sm text-neutral-medium-gray">SUSEP 12345 | Parceiros certificados</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-medium-gray">
              Atendimento 100% digital sem abrir mão do contato humano. Acompanhamos você da vistoria ao reparo,
              com oficinas credenciadas e veículos reserva disponíveis nas principais capitais.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {autoSupportLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-neutral-light-gray px-4 py-3 text-sm font-semibold text-neutral-charcoal transition-all duration-200 hover:border-primary hover:text-primary"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-neutral-light-gray px-4 py-3 text-sm font-semibold text-neutral-charcoal transition-all duration-200 hover:border-primary hover:text-primary"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-2xl bg-neutral-off-white/80 p-6">
            <h3 className="text-lg font-semibold text-neutral-charcoal">Canais de atendimento</h3>
            <p className="text-sm text-neutral-medium-gray">
              Precisa conversar com a equipe? Estamos disponíveis 24 horas para emergências e em horário comercial para consultas.
            </p>
            <div className="space-y-4 text-sm text-neutral-charcoal">
              <Link href="tel:0800123456" className="flex items-center gap-3 rounded-2xl border border-neutral-light-gray px-4 py-3 transition-colors duration-200 hover:border-primary hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                0800 123 456 (Assistência 24h)
              </Link>
              <Link href="mailto:contato@clicaseguros.com.br" className="flex items-center gap-3 rounded-2xl border border-neutral-light-gray px-4 py-3 transition-colors duration-200 hover:border-primary hover:text-primary">
                <Mail className="h-5 w-5 text-primary" />
                contato@clicaseguros.com.br
              </Link>
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-light-gray px-4 py-3 text-neutral-medium-gray">
                <MapPin className="h-5 w-5 text-primary" />
                São Paulo • Atendimento em todo o Brasil
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-light-gray pt-8 text-center text-xs text-neutral-medium-gray md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <Image
              src="/logos/Logotipo Clica seguros - Preto.png"
              alt="Clica Seguros Logo"
              width={1839}
              height={591}
              className="w-28"
            />
            <p>
              &copy; {new Date().getFullYear()} Clica Seguros. <br /> Especialistas em seguro auto sob medida.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="#termos" className="transition-colors hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="/blog" className="transition-colors hover:text-primary">
              Recursos para motoristas
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}


'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Car, ShieldCheck, Headphones, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

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
      <div className="app-container space-y-16 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Car className="h-4 w-4" />
              Seguro Auto Inteligente
            </div>
            <h2 className="text-3xl font-bold text-neutral-charcoal md:text-4xl">
              Proteção completa para o seu carro com atendimento humano e tecnologia de ponta
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-medium-gray">
              A Clica Seguros cuida de toda a jornada do seguro auto: da cotação instantânea ao acompanhamento do sinistro.
              Conectamos você às melhores seguradoras do país com planos moldados ao seu estilo de direção.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/30 transition-transform duration-200 hover:-translate-y-1 hover:bg-primary/90"
              >
                <a href={quiverOnUrl}>
                  Simular agora
                </a>
              </Button>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Falar com especialista
                <Headphones className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-neutral-light-gray/80 bg-white/90 p-8 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-neutral-charcoal">
              Benefícios exclusivos do seguro auto Clica
            </h3>
            <div className="space-y-5">
              {autoHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 text-sm text-neutral-medium-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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
          <p>
            &copy; {new Date().getFullYear()} Clica Seguros. Especialistas em seguro auto sob medida.
          </p>
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

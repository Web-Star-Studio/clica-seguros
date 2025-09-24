'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle2,
  ArrowRight,
  Download,
  ShieldCheck,
  Clock,
  MessageCircle,
  Phone,
  Car,
  FileText,
  Sparkles,
} from 'lucide-react'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const timeline = [
  {
    title: 'Analise o resumo da cotação',
    description: 'Confira coberturas, valores e franquias antes de avançar.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: 'Escolha a melhor opção',
    description: 'Compare cenários e personalize de acordo com a sua necessidade.',
    icon: <Car className="h-5 w-5" />,
  },
  {
    title: 'Finalize com a nossa equipe',
    description: 'Assine digitalmente e receba a apólice direto no seu e-mail.',
    icon: <Clock className="h-5 w-5" />,
  },
]

const highlightCards = [
  {
    title: 'Cobertura completa',
    value: 'R$ 120.000,00',
    description: 'Proteção para colisão, roubo, incêndio e terceiros com assistência 24h.',
  },
  {
    title: 'Franquia reduzida',
    value: 'R$ 2.800,00',
    description: 'Opção flexível para diminuir o impacto em caso de sinistro.',
  },
  {
    title: 'Pagamento facilitado',
    value: '12x sem juros',
    description: 'Parcelamento direto no cartão ou débito em conta com desconto.',
  },
]

const supportOptions = [
  {
    title: 'Falar com um especialista',
    description: 'Tire dúvidas ao vivo e receba orientação personalizada.',
    icon: <Phone className="h-5 w-5" />,
    action: 'Agendar ligação',
    href: 'tel:+5511999999999',
  },
  {
    title: 'Atendimento via WhatsApp',
    description: 'Envie documentos e receba atualizações em tempo real.',
    icon: <MessageCircle className="h-5 w-5" />,
    action: 'Abrir conversa',
    href: 'https://wa.me/5511999999999',
  },
]

const documents = [
  {
    name: 'Resumo da proposta.pdf',
    description: 'Detalhes completos da cobertura escolhida.',
  },
  {
    name: 'Checklist de contratação.pdf',
    description: 'Passo a passo com todos os documentos necessários.',
  },
]

export default function ConfirmacaoCotacaoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-off-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-accent-emerald-green/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,103,255,0.12),_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <section className="app-container relative py-24">
          <motion.div
            className="mx-auto max-w-4xl rounded-3xl border border-white/60 bg-white/80 p-10 shadow-elevation-3 backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <Badge variant="success" size="lg" className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Cotação recebida com sucesso
              </Badge>
              <motion.h1
                className="text-3xl font-semibold text-neutral-charcoal sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Tudo certo! Preparamos sua proposta personalizada
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg text-neutral-medium-gray"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Revise os detalhes da sua cotação, compartilhe com quem precisa decidir e continue o processo quando estiver pronto. Nossa equipe está disponível para ajudar em cada etapa.
              </motion.p>
              <motion.div
                className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <a href={quiverOnUrl} className="w-full sm:w-auto">
                  <Button size="lg" variant="brand" className="w-full">
                    Acessar minha cotação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href="/" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full">
                    Voltar para a página inicial
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="app-container pb-16">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              className="rounded-3xl border border-white/60 bg-white p-8 shadow-elevation-2"
              variants={itemVariant}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="primary" size="sm" className="mb-3">
                    Proposta #CL-4832
                  </Badge>
                  <h2 className="text-2xl font-semibold text-neutral-charcoal">
                    Resumo da sua cotação
                  </h2>
                  <p className="mt-2 text-neutral-medium-gray">
                    Ajustamos a proposta de acordo com o perfil informado. Você pode reenviar novas informações sempre que quiser evoluir a oferta.
                  </p>
                </div>
                <Sparkles className="h-6 w-6 text-primary" />
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {highlightCards.map((card) => (
                  <motion.div
                    key={card.title}
                    className="rounded-2xl border border-neutral-light-gray/60 bg-neutral-off-white/60 p-5"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-sm font-semibold text-primary uppercase tracking-[0.08em]">
                      {card.title}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-neutral-charcoal">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm text-neutral-medium-gray">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-primary/10 p-5">
                  <p className="text-sm font-semibold text-primary">Próxima ação recomendada</p>
                  <p className="mt-2 text-neutral-charcoal">
                    Compartilhe a proposta com o responsável pela decisão e deixe tudo pronto para assinatura digital.
                  </p>
                </div>
                <div className="rounded-2xl bg-accent-emerald-green/10 p-5">
                  <p className="text-sm font-semibold text-accent-emerald-green">Tempo médio de ativação</p>
                  <p className="mt-2 text-neutral-charcoal">
                    Após o envio da documentação, a sua apólice fica ativa em até <span className="font-semibold">2h úteis</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex h-full flex-col gap-5 rounded-3xl border border-white/60 bg-white p-8 shadow-elevation-2"
              variants={itemVariant}
            >
              <h3 className="text-lg font-semibold text-neutral-charcoal">Documentos disponíveis</h3>
              <p className="text-sm text-neutral-medium-gray">
                Faça download dos arquivos para analisar offline ou compartilhar com sua equipe.
              </p>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <motion.div
                    key={doc.name}
                    className="flex items-center justify-between rounded-2xl bg-neutral-off-white/70 p-4"
                    whileHover={{ x: 6 }}
                  >
                    <div>
                      <p className="font-semibold text-neutral-charcoal">{doc.name}</p>
                      <p className="text-sm text-neutral-medium-gray">{doc.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Baixar
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-2xl border border-dashed border-primary/40 p-4 text-sm text-primary">
                Precisa de algum documento específico? Fale com a gente pelo chat e enviamos em poucos minutos.
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="app-container pb-24">
          <motion.div
            className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-accent-emerald-green/10 p-10 shadow-elevation-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-charcoal">Próximos passos com a Clica Seguros</h3>
                <p className="mt-2 text-neutral-medium-gray">
                  Estamos prontos para finalizar tudo com você. Veja como avançar de forma rápida e sem burocracia.
                </p>
                <div className="mt-8 grid gap-4">
                  {timeline.map((item) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 shadow-soft"
                      variants={itemVariant}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-40px' }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-charcoal">{item.title}</p>
                        <p className="text-sm text-neutral-medium-gray">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg font-semibold text-neutral-charcoal">Suporte dedicado</h4>
                <p className="text-sm text-neutral-medium-gray">
                  Nossa equipe vai acompanhar sua jornada do começo ao fim. Escolha o canal ideal para você.
                </p>
                <div className="space-y-4">
                  {supportOptions.map((option) => (
                    <motion.a
                      key={option.title}
                      href={option.href}
                      className="flex items-center justify-between rounded-2xl border border-transparent bg-white/90 p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-medium"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {option.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-charcoal">{option.title}</p>
                          <p className="text-sm text-neutral-medium-gray">{option.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <span>{option.action}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="rounded-2xl border border-neutral-light-gray/60 bg-white/80 p-5 text-sm text-neutral-medium-gray">
                  Preferir enviar os documentos depois? Sem problemas. Guardamos sua cotação por <span className="font-semibold text-neutral-charcoal">7 dias</span> para você retomar quando quiser.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="app-container pb-32">
          <motion.div
            className="mx-auto max-w-3xl rounded-3xl border border-white/60 bg-white/90 p-8 text-center shadow-elevation-2 backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Badge variant="secondary" className="mx-auto mb-4 gap-2">
              <FileText className="h-4 w-4" />
              Documentação simplificada
            </Badge>
            <h3 className="text-2xl font-semibold text-neutral-charcoal">Continue a jornada com confiança</h3>
            <p className="mt-3 text-neutral-medium-gray">
              Quando estiver pronto, clique no botão abaixo para seguir com a contratação. Estamos com você em cada etapa para garantir uma experiência sem complicações.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={quiverOnUrl} className="w-full sm:w-auto">
                <Button size="lg" variant="brand" className="w-full">
                  Finalizar contratação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/simulacao" className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="w-full">
                  Ajustar informações
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}

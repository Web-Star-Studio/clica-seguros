import Link from 'next/link'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

const helpTopics = [
  {
    question: 'Como funciona a assistência 24h em casos de pane mecânica?',
    answer:
      'Basta acionar o aplicativo ou nossa central telefônica para ter um guincho enviado ao local, além de suporte com chaveiro, troca de pneu e transporte alternativo.',
  },
  {
    question: 'Posso incluir condutores adicionais e como isso impacta o preço?',
    answer:
      'Sim. A inclusão de condutores com bom histórico pode reduzir o valor do seguro, enquanto perfis de maior risco podem gerar ajustes na mensalidade.',
  },
  {
    question: 'Qual a diferença entre franquia reduzida e franquia padrão?',
    answer:
      'A franquia reduzida aumenta discretamente a mensalidade, mas diminui significativamente o valor a ser pago em caso de sinistro parcial.',
  },
  {
    question: 'O que fazer em caso de sinistro com terceiros envolvidos?',
    answer:
      'Registre o boletim de ocorrência, colete os dados do outro condutor e acione imediatamente nossa central. Nossa equipe media o contato com os terceiros e conduz o processo até a indenização.',
  },
]

const contactChannels = [
  {
    title: 'Atendimento telefônico 24h',
    description: 'Sinistros, assistência e emergências',
    actionLabel: 'Ligar agora',
    href: 'tel:0800123456',
  },
  {
    title: 'Suporte por WhatsApp',
    description: 'Resposta média em 5 minutos',
    actionLabel: 'Abrir WhatsApp',
    href: 'https://wa.me/550800123456',
  },
  {
    title: 'E-mail dedicado',
    description: 'Para dúvidas detalhadas ou envio de documentos',
    actionLabel: 'Enviar e-mail',
    href: 'mailto:contato@clicaseguros.com.br',
  },
]

const knowledgePacks = [
  {
    title: 'Checklist de sinistro',
    description: 'Passo a passo para acionar a seguradora, reunir documentos e acompanhar reparos.',
    href: '#',
  },
  {
    title: 'Guia de coberturas extras',
    description: 'Entenda em quais situações adicionar carro reserva, vidros e acessórios.',
    href: '#',
  },
  {
    title: 'Calculadora de franquia',
    description: 'Descubra qual franquia faz mais sentido para o seu perfil de uso do veículo.',
    href: '#',
  },
]

export default function CentralDeAjudaPage() {
  return (
    <main className="bg-neutral-off-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent-emerald-green/10 py-20">
        <div className="app-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Suporte especializado
            </span>
            <h1 className="text-4xl font-bold leading-tight text-neutral-charcoal md:text-5xl">
              Central de ajuda para um seguro sem complicações
            </h1>
            <p className="max-w-2xl text-lg text-neutral-medium-gray">
              Tire dúvidas sobre coberturas, contratação, assistência e sinistros com uma equipe que fala a sua língua.
              Estamos ao seu lado do primeiro contato ao encerramento do processo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={quiverOnUrl}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Simular agora
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Falar com especialista
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-medium-gray">
              <span>✔ Atendimento humanizado 24h</span>
              <span>✔ Documentação guiada passo a passo</span>
              <span>✔ Materiais educativos gratuitos</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-neutral-light-gray/60 bg-white/90 p-8 shadow-xl shadow-primary/20">
              <h2 className="text-lg font-semibold text-neutral-charcoal">
                Linha do tempo do atendimento
              </h2>
              <ol className="mt-6 space-y-4 text-sm text-neutral-medium-gray">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    1
                  </span>
                  Abra um chamado no app ou telefone e receba o protocolo na hora.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    2
                  </span>
                  Envie fotos, documentos e relatos por meio seguro e criptografado.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    3
                  </span>
                  Acompanhe notificações em tempo real até a conclusão do atendimento.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="app-container space-y-8 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold text-neutral-charcoal md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-neutral-medium-gray">
            Encontre respostas rápidas antes de acessar o atendimento ao vivo.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {helpTopics.map((topic) => (
            <details
              key={topic.question}
              className="group rounded-2xl border border-neutral-light-gray/60 bg-white/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-neutral-charcoal">
                {topic.question}
                <span className="text-sm text-primary/80">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-neutral-medium-gray">
                {topic.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="app-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-charcoal">
              Canais de atendimento dedicados
            </h2>
            <p className="text-neutral-medium-gray">
              Escolha o canal ideal para o momento: suporte emergencial, dúvidas comerciais ou envio de documentações.
            </p>
            <div className="grid gap-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="rounded-2xl border border-neutral-light-gray px-6 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-neutral-charcoal">{channel.title}</h3>
                  <p className="mt-1 text-sm text-neutral-medium-gray">{channel.description}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {channel.actionLabel} →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-light-gray/60 bg-neutral-off-white/80 p-8">
            <h3 className="text-xl font-semibold text-neutral-charcoal">Biblioteca de materiais rápidos</h3>
            <p className="mt-2 text-sm text-neutral-medium-gray">
              Baixe guias, checklists e ferramentas que simplificam cada etapa da contratação e da manutenção do seguro.
            </p>
            <div className="mt-8 grid gap-4">
              {knowledgePacks.map((pack) => (
                <a
                  key={pack.title}
                  href={pack.href}
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:text-primary"
                >
                  <div>
                    <p>{pack.title}</p>
                    <p className="text-xs font-normal text-neutral-medium-gray">{pack.description}</p>
                  </div>
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="app-container space-y-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent-emerald-green/10 p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold text-neutral-charcoal md:text-3xl">
                Prefere autonomia? Temos conteúdo guiado e simulador pronto para você.
              </h2>
              <p className="text-sm text-neutral-medium-gray">
                Compare coberturas, faça cálculos personalizados e finalize tudo online. Nossa equipe entra em cena somente quando você precisar.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={quiverOnUrl}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Abrir simulador
              </a>
              <Link
                href="/tutoriais"
                className="inline-flex items-center justify-center rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Ver tutoriais passo a passo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

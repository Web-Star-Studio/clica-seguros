import Link from 'next/link'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

const tutorials = [
  {
    title: 'Simule seu seguro em 3 passos',
    description: 'Entenda como gerar sua cotação personalizada em minutos.',
    steps: [
      'Informe dados básicos do veículo, CEP e perfil do principal condutor.',
      'Compare planos personalizados com diferentes franquias e coberturas adicionais.',
      'Finalize com assinatura digital e receba a apólice no e-mail em minutos.',
    ],
  },
  {
    title: 'Como acionar a assistência 24h pelo aplicativo',
    description: 'Resolva emergências com rastreamento em tempo real do prestador.',
    steps: [
      'Acesse o aplicativo Clica Seguros e toque em “Preciso de ajuda”.',
      'Escolha o tipo de assistência (guincho, chaveiro, pneu, combustível).',
      'Acompanhe em tempo real a localização do prestador até a sua chegada.',
    ],
  },
  {
    title: 'Checklist para vistoria digital',
    description: 'Envie fotos e documentos corretos para agilizar a liberação do seguro.',
    steps: [
      'Limpe o veículo e escolha um local bem iluminado.',
      'Fotografe todos os lados, interior e itens obrigatórios seguindo nosso guia visual.',
      'Anexe documentos solicitados e finalize pelo aplicativo ou portal web.',
    ],
  },
]

const videoGuides = [
  {
    title: 'Tour pelo simulador da Clica',
    duration: '3min',
    href: '#',
  },
  {
    title: 'Como usar o acompanhamento do sinistro em tempo real',
    duration: '5min',
    href: '#',
  },
  {
    title: 'Entendendo coberturas opcionais sem complicação',
    duration: '4min',
    href: '#',
  },
]

export default function TutoriaisPage() {
  return (
    <main className="bg-neutral-off-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent-emerald-green/10 py-20">
        <div className="app-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Aprenda no seu ritmo
            </span>
            <h1 className="text-4xl font-bold leading-tight text-neutral-charcoal md:text-5xl">
              Tutoriais completos para dominar seu seguro auto
            </h1>
            <p className="max-w-2xl text-lg text-neutral-medium-gray">
              Guias passo a passo, vídeos curtos e materiais interativos que mostram como contratar, acionar e aproveitar todos os benefícios do seguro Clica.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={quiverOnUrl}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Abrir simulador agora
              </a>
              <Link
                href="/central-de-ajuda"
                className="inline-flex items-center justify-center rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Ir para a central de ajuda
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-medium-gray">
              <span>✔ Vídeos, checklists e passo a passo detalhado</span>
              <span>✔ Atualizado com base nas dúvidas reais dos clientes</span>
              <span>✔ Gratuito e disponível 24h</span>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-light-gray/60 bg-white/90 p-8 shadow-xl shadow-primary/20">
            <h2 className="text-lg font-semibold text-neutral-charcoal">O que você vai aprender</h2>
            <ul className="mt-6 space-y-4 text-sm text-neutral-medium-gray">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  1
                </span>
                Contratação simples, digital e sem letras miúdas.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  2
                </span>
                Configuração do app para receber notificações e acompanhamento em tempo real.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  3
                </span>
                Boas práticas para manter o seguro em dia e economizar nas renovações.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="app-container space-y-12 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold text-neutral-charcoal md:text-4xl">
            Passo a passo detalhado
          </h2>
          <p className="text-neutral-medium-gray">
            Siga as etapas abaixo para aprender cada funcionalidade do nosso seguro auto digital.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <article
              key={tutorial.title}
              className="rounded-3xl border border-neutral-light-gray/60 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-neutral-charcoal">
                {tutorial.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-medium-gray">{tutorial.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-medium-gray">
                {tutorial.steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="app-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Video on demand
            </span>
            <h2 className="text-3xl font-bold text-neutral-charcoal md:text-4xl">
              Assista aos guias em poucos minutos
            </h2>
            <p className="max-w-2xl text-base text-neutral-medium-gray">
              Conteúdo direto ao ponto para você aplicar imediatamente o que aprendeu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={quiverOnUrl}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Testar simulador
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Ler artigos relacionados
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-light-gray/60 bg-neutral-off-white/80 p-8">
            <h3 className="text-lg font-semibold text-neutral-charcoal">Vídeos recomendados</h3>
            <div className="mt-6 space-y-4">
              {videoGuides.map((video) => (
                <a
                  key={video.title}
                  href={video.href}
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-neutral-charcoal transition-all duration-200 hover:-translate-y-1 hover:text-primary"
                >
                  <div>
                    <p>{video.title}</p>
                    <p className="text-xs font-normal text-neutral-medium-gray">{video.duration} • Tutorial em vídeo</p>
                  </div>
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

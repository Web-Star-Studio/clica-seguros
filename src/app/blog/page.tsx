import Image from 'next/image'
import Link from 'next/link'

const quiverOnUrl = process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

const featuredArticle = {
  title: 'Seguro auto inteligente: como proteger o carro sem pesar no bolso',
  excerpt: 'Tecnologia, personalização e assistência 24h estão mudando a forma como os brasileiros contratam seguros automotivos.',
  readTime: '7 min de leitura',
  image: '/blog-banner-image.jpg',
  tags: ['Tendências 2025', 'Seguro Digital', 'Assistência 24h'],
}

const articles = [
  {
    title: 'Checklist completo para comparar seguros sem cair em armadilhas',
    description: 'Analise coberturas, franquias, assistências e bônus de renovação para garantir o melhor custo-benefício.',
    readTime: '5 min',
    category: 'Planejamento Financeiro',
    href: '#',
  },
  {
    title: 'Seguro para carros elétricos: o que muda na cobertura e na manutenção?',
    description: 'Conheça os desafios de reparo, disponibilidade de peças e serviços especializados para veículos elétricos.',
    readTime: '8 min',
    category: 'Mobilidade Sustentável',
    href: '#',
  },
  {
    title: 'Dirigir por aplicativo: como proteger seu carro e maximizar ganhos',
    description: 'Coberturas essenciais, proteções para passageiros e diferenciais para quem vive da economia sob demanda.',
    readTime: '6 min',
    category: 'Motoristas Parceiros',
    href: '#',
  },
  {
    title: 'Seguro por assinatura: quando faz sentido trocar o modelo tradicional?',
    description: 'Pagamentos flexíveis, cobertura on-demand e integração com telemetria para monitorar o uso do veículo.',
    readTime: '4 min',
    category: 'Inovação',
    href: '#',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-neutral-off-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent-emerald-green/10 py-20">
        <div className="app-container relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Atualizações do mercado
            </span>
            <h1 className="text-4xl font-bold leading-tight text-neutral-charcoal md:text-5xl">
              Insights, tendências e guias completos sobre seguros automotivos
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-medium-gray">
              Acompanhe o blog da Clica Seguros para entender como a tecnologia está transformando a proteção veicular no Brasil.
              Encontramos especialistas, analisamos dados reais e reunimos dicas práticas para motoristas, gestores de frotas e quem está comprando o primeiro carro.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#ultimas-noticias"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Ver últimas notícias
              </Link>
              <Link
                href="/central-de-ajuda"
                className="rounded-full border border-neutral-light-gray px-6 py-3 text-sm font-semibold text-neutral-charcoal transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Dúvidas frequentes
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-medium-gray">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                Insights exclusivos para clientes
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-emerald-green" />
                Atualizado semanalmente
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-neutral-dark-gray" />
                Conteúdo curado por especialistas
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={720}
                height={540}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-neutral-charcoal/60" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white md:p-10">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                    {featuredArticle.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/15 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem]">
                    {featuredArticle.title}
                  </h2>
                  <p className="max-w-3xl text-sm text-white/80 md:text-base">
                    {featuredArticle.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-white/80 md:text-sm">
                  <span>{featuredArticle.readTime}</span>
                  <Link
                    href="#ultimas-noticias"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    Ler agora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-off-white to-transparent" />
      </section>

      <section id="ultimas-noticias" className="app-container space-y-12 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-neutral-charcoal md:text-4xl">
              Últimas notícias e análises
            </h2>
            <p className="max-w-2xl text-base text-neutral-medium-gray">
              Conteúdo preparado para quem busca clareza na contratação do seguro e quer ficar por dentro das inovações do mercado automotivo brasileiro.
            </p>
          </div>
          <a
            href={quiverOnUrl}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-light-gray px-5 py-3 text-sm font-semibold text-neutral-charcoal transition-all duration-200 hover:border-primary hover:text-primary"
          >
            Faça uma simulação gratuita
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group rounded-3xl border border-neutral-light-gray/60 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {article.category}
                </span>
                <span className="text-neutral-medium-gray">{article.readTime}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-neutral-charcoal transition-colors group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-medium-gray">
                {article.description}
              </p>
              <Link
                href={article.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1"
              >
                Ler artigo completo
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-charcoal py-20 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-primary/20 to-transparent lg:block" />
        <div className="app-container relative grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
              Para fechar com tranquilidade
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">
              Faça uma simulação gratuita e descubra o plano ideal para o seu carro
            </h2>
            <p className="text-base text-white/80">
              Receba cotações personalizadas em minutos, com coberturas flexíveis e parcelamento facilitado. Sem telefonemas insistentes ou letras miúdas.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span>✔ Sem custo e sem compromisso</span>
              <span>✔ Análise de perfil inteligente</span>
              <span>✔ Assistência 24h em todo o Brasil</span>
            </div>
            <a
              href={quiverOnUrl}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Simular agora
            </a>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-white">
              Indicadores do mercado automotivo
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Dados atualizados com base em relatórios da Fenabrave, Denatran e associações do setor de seguros.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Tempo médio de indenização parcial</dt>
                <dd className="text-lg font-semibold text-white">4 dias úteis</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Crescimento do seguro por assinatura</dt>
                <dd className="text-lg font-semibold text-white">+32% em 2024</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Satisfação média dos clientes Clica</dt>
                <dd className="text-lg font-semibold text-white">9,6/10</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Carros elétricos segurados este ano</dt>
                <dd className="text-lg font-semibold text-white">+1.250 veículos</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  )
}

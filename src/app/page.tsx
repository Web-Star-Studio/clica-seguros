import { Ribbons } from '@/components/effects/ribbons'
import { HeroSection } from '@/components/sections/hero-section'
import { SinistroSemEstresseSection } from '@/components/sections/sinistro-sem-estresse-section'
import { ComoFuncionaSection } from '@/components/sections/como-funciona-section'
import { NossoCompromissoSection } from '@/components/sections/nosso-compromisso-section'
import { ParaTodosOsCarrosSection } from '@/components/sections/para-todos-os-carros-section'
import { SocialProofSection } from '@/components/sections/social-proof-section'
import { CtaSection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-neutral-off-white">
      <Ribbons
        className="opacity-70"
        colors={['#4667ff', '#7f7bf2', '#5fcff2', '#8fffe9']}
        baseThickness={24}
        speedMultiplier={0.52}
        maxAge={720}
        enableFade
        enableShaderEffect
        effectAmplitude={1.4}
      />
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <SinistroSemEstresseSection />
        <NossoCompromissoSection />
        <ParaTodosOsCarrosSection />
        <SocialProofSection />
        <CtaSection />
      </div>
    </main>
  )
}

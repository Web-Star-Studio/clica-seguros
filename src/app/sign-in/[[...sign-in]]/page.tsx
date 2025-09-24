import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SignInPage() {
  return (
    <div className="grid h-[90vh] grid-cols-1 lg:grid-cols-5">
      <div className="relative hidden items-center justify-center bg-neutral-off-white lg:col-span-3 lg:flex">
        <div className="relative h-3/4 w-11/12 overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/hero-image.png"
            alt="Car on a scenic road"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-neutral-off-white p-4 lg:col-span-2">
        <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-2xl font-bold text-neutral-charcoal">Autenticação indisponível</h1>
          <p className="mt-3 text-neutral-medium-gray">
            As funcionalidades de login estão temporariamente desativadas enquanto simplificamos a plataforma.
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-sm text-neutral-dark-gray">
              Continue explorando nossos produtos ou fale com a equipe para tirar dúvidas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button className="w-full">Voltar para a página inicial</Button>
              </Link>
              <Link href="/cotacao">
                <Button variant="outline" className="w-full">Ver opções de seguro</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

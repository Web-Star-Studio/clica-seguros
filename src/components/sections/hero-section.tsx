'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const quiverOnUrl =
    process.env.NEXT_PUBLIC_QUIVER_ON_URL ?? process.env.QUIVER_ON_URL ?? '/simulacao'

  return (
    <section className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-image.png')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Seguro auto rápido, fácil e sem burocracia.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xl text-lg sm:text-xl"
        >
          Na Clica Seguros você encontra o seguro ideal para o seu carro em poucos cliques. Compare as melhores ofertas e contrate online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button asChild size="xl" roundness="full">
            <a href={quiverOnUrl}>Faça sua cotação</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

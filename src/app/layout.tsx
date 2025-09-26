'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QueryProvider } from '@/lib/providers/query-provider'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const shouldShowHeader = !pathname.startsWith('/dashboard') && !pathname.startsWith('/admin')
  const shouldShowFooter = shouldShowHeader

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          {shouldShowHeader && <Header />}
          {children}
          {shouldShowFooter && <Footer />}
        </QueryProvider>
      </body>
    </html>
  );
}

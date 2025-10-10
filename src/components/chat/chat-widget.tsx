'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  createdAt: number
}

const INITIAL_ASSISTANT_MESSAGE: ChatMessage = {
  id: 'assistant-welcome',
  role: 'assistant',
  content:
    'Olá! Sou o assistente da Clica Seguros. Posso responder dúvidas sobre Seguro Auto, coberturas, sinistros e nossa proteção. Como posso ajudar?',
  createdAt: Date.now(),
}

const MAX_MESSAGES = 30
const SCROLL_PADDING_PX = 24

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_ASSISTANT_MESSAGE])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const conversationIdRef = useRef<string>(generateConversationId())
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => a.createdAt - b.createdAt).slice(-MAX_MESSAGES),
    [messages]
  )

  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return

    const el = scrollContainerRef.current
    el.scrollTo({ top: el.scrollHeight + SCROLL_PADDING_PX, behavior: 'smooth' })
  }, [sortedMessages, isOpen])

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const trimmed = inputValue.trim()

      if (!trimmed || isLoading) return

      setError(null)
      setIsLoading(true)

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: trimmed,
        createdAt: Date.now(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInputValue('')

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: trimmed,
            conversationId: conversationIdRef.current,
          }),
        })

        if (!response.ok) {
          const errorPayload = await response.json().catch(() => ({}))
          const composedMessage = buildErrorMessage(errorPayload, response.status)
          throw new Error(composedMessage)
        }

        const result = await response.json().catch(() => null)
        const assistantContent = sanitizeAssistantContent(extractAssistantContent(result))

        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: assistantContent,
          createdAt: Date.now(),
        }

        setMessages((prev) => [...prev, assistantMessage])
      } catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : 'Erro desconhecido. Tente novamente.')
      } finally {
        setIsLoading(false)
      }
    },
    [inputValue, isLoading, sortedMessages]
  )

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-widget"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            className="flex w-[min(360px,90vw)] flex-col overflow-hidden rounded-3xl border border-neutral-light-gray bg-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 bg-primary px-4 py-3 text-white">
              <div>
                <h3 className="text-base font-semibold">Assistente Seguro Auto</h3>
                <p className="text-xs text-white/80">Tire dúvidas sobre coberturas, sinistros e como contratar.</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                roundness="full"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={handleToggle}
                aria-label="Fechar chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </header>

            <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
              <div
                ref={scrollContainerRef}
                className="custom-scrollbar flex max-h-[320px] flex-col gap-3 overflow-y-auto pr-2"
              >
                {sortedMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn('flex flex-col text-sm', {
                      'items-end text-neutral-charcoal': message.role === 'user',
                      'items-start text-neutral-charcoal': message.role === 'assistant',
                    })}
                  >
                    <div
                      className={cn(
                        'whitespace-pre-wrap rounded-2xl px-4 py-2 shadow-sm',
                        message.role === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-neutral-off-white text-neutral-charcoal'
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                  {error}
                </div>
              )}

              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Textarea
                  placeholder="Digite sua pergunta sobre Seguro Auto..."
                  value={inputValue}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                    setInputValue(event.target.value)
                  }
                  disabled={isLoading}
                  className="h-24 resize-none text-sm"
                />
                <Button type="submit" variant="brand" disabled={isLoading || !inputValue.trim()}>
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensagem'
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={handleToggle}
        variant="brand"
        roundness="full"
        size="icon"
        className="h-16 w-16 p-0 shadow-xl"
        aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente'}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  )
}

function extractAssistantContent(result: unknown): string {
  if (!result) return 'Desculpe, não consegui entender a resposta do assistente.'

  if (typeof result === 'string') return result

  if (typeof result === 'object') {
    if ('reply' in result && typeof (result as any).reply === 'string') {
      return (result as any).reply
    }
    if ('answer' in result && typeof (result as any).answer === 'string') {
      return (result as any).answer
    }
    if ('message' in result && typeof (result as any).message === 'string') {
      return (result as any).message
    }
    if ('messages' in result && Array.isArray((result as any).messages)) {
      const assistantMessage = (result as any).messages.find(
        (msg: unknown) => typeof msg === 'object' && msg && (msg as any).role === 'assistant'
      )
      if (assistantMessage && typeof assistantMessage.content === 'string') {
        return assistantMessage.content
      }
    }
  }

  return 'Recebi uma resposta inesperada do assistente. Tente novamente em instantes.'
}

function generateConversationId() {
  return `conv-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`
}

function buildErrorMessage(payload: any, statusCode: number): string {
  const base = typeof payload?.error === 'string' ? payload.error : 'Falha ao comunicar com o assistente.'

  const details: string[] = []

  if (typeof payload?.detail === 'string') {
    details.push(payload.detail)
  } else if (payload?.detail && typeof payload.detail === 'object') {
    details.push(JSON.stringify(payload.detail))
  }

  if (payload?.status && typeof payload.status === 'number') {
    details.push(`status ${payload.status}`)
  } else if (!Number.isNaN(statusCode)) {
    details.push(`status ${statusCode}`)
  }

  return [base, ...details].join(' | ')
}

function sanitizeAssistantContent(content: string): string {
  return content
    .replace(/\u00a0/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

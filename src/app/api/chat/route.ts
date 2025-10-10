import { NextResponse } from 'next/server'
import { ZodError, z } from 'zod'

const requestSchema = z.object({
  query: z.string().min(1, 'Envie uma pergunta.'),
  conversationId: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
})

const REQUEST_TIMEOUT_MS = 30000

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_CHATBOT_URL

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error: 'N8N_CHATBOT_URL não configurada.',
      },
      { status: 500 }
    )
  }

  let payload: z.infer<typeof requestSchema>

  try {
    const json = await request.json()
    payload = requestSchema.parse(json)
  } catch (error) {
    const message = error instanceof ZodError ? error.issues : 'Payload inválido.'
    return NextResponse.json({ error: message }, { status: 400 })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const webhookPayload = {
      query: payload.query,
      ...(payload.conversationId ? { conversationId: payload.conversationId } : {}),
      ...(payload.metadata ? { metadata: payload.metadata } : {}),
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    const rawBody = await webhookResponse.text()
    const data = rawBody ? safelyParseJson(rawBody) : null

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          error: 'Erro ao consultar o assistente externo.',
          status: webhookResponse.status,
          detail: data ?? rawBody,
        },
        { status: webhookResponse.status }
      )
    }

    return NextResponse.json(data ?? { success: true })
  } catch (error) {
    clearTimeout(timeout)

    const isAbortError =
      error instanceof DOMException && error.name === 'AbortError'

    return NextResponse.json(
      {
        error: isAbortError
          ? 'Tempo de resposta do assistente excedido.'
          : 'Falha ao contactar o assistente externo.',
      },
      { status: 504 }
    )
  }
}

function safelyParseJson(value: string) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

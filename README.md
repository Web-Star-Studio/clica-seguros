This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Chatbot Seguro Auto

O projeto inclui um assistente conversacional acessível em todas as páginas por meio do widget "Assistente Seguro Auto".

- **Endpoint interno:** `POST /api/chat`.
- **Integração externa:** a API interna envia apenas o campo `query` (texto digitado pelo usuário) ao webhook configurado em `N8N_CHATBOT_URL`, opcionalmente acompanhado de `conversationId` e `metadata`.

### Configuração

1. Adicione ao arquivo `.env.local`:

```env
N8N_CHATBOT_URL=https://sua-instancia-n8n.com/webhook/assistente-seguro-auto
```

2. Reinicie o servidor de desenvolvimento após alterar variáveis de ambiente.

3. Garanta que o fluxo no n8n receba um corpo como `{"query":"Pergunta do usuário"}` e responda com um JSON contendo o texto do assistente (`{"reply": "texto"}`) ou qualquer uma das propriedades aceitas (`reply`, `answer`, `message`, `messages`).

## Deploy

Para deploy em produção, configure também `N8N_CHATBOT_URL` na plataforma escolhida (ex.: Vercel) e verifique a acessibilidade pública do webhook.

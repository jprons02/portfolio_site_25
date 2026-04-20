import { NextResponse } from 'next/server'

const SEND_EMAIL_URL =
  'https://llnaae68vk.execute-api.us-east-1.amazonaws.com/prod'

type EmailPayload = {
  name: string
  email: string
  message: string
}

export async function POST(req: Request) {
  const apiKey = process.env.AWS_SES_API_GATEWAY_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service configuration is missing.' },
      { status: 500 },
    )
  }

  let data: EmailPayload

  try {
    data = (await req.json()) as EmailPayload
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 },
    )
  }

  const response = await fetch(SEND_EMAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })

  const text = await response.text()

  return new Response(text, {
    status: response.status,
    headers: {
      'Content-Type':
        response.headers.get('content-type') ?? 'application/json',
    },
  })
}

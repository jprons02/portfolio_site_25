const SEND_EMAIL_URL =
  'https://llnaae68vk.execute-api.us-east-1.amazonaws.com/prod'

const API_KEY = 'qfYTGYLMKD7FTrzwiFDer2MyBVxR3uFOaJLAK1dj'

export async function sendEmail(data: {
  name: string
  email: string
  message: string
}) {
  const response = await fetch(SEND_EMAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify(data),
  })
  return response
}

import keys from '../keys'

const sendEmail = async ({ name, email, message }) => {
  const response = await fetch(
    'https://llnaae68vk.execute-api.us-east-1.amazonaws.com/prod',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': keys.portfolioSiteAPI,
      },
      body: JSON.stringify({ name, email, message }),
    }
  )
  return response
}

export default sendEmail

export interface ResultResponse {
  string: string[]
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch('https://qrandom.io/api/random/string', {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return (await response.json()) as ResultResponse
}

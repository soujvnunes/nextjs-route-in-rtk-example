export async function GET() {
  const response = await fetch('https://qrandom.io/api/random/string', {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return (await response.json()) as string[]
}

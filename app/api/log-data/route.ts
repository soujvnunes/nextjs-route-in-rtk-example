import { type NextRequest, NextResponse } from 'next/server'

export async function POST(params: NextRequest) {
  const response = (await params.json()) as { data: string }

  console.log(response.data)

  return NextResponse.json({ success: true })
}

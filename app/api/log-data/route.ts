import { type NextRequest, NextResponse } from 'next/server'

export interface LogDataRequest {
  data: string
}

export async function POST(params: NextRequest) {
  const response = (await params.json()) as LogDataRequest

  console.log(response)

  return NextResponse.json({ success: true })
}

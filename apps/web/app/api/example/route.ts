import { NextResponse } from 'next/server'

export async function GET() {
  // In a real app, fetch from database
  const data = [
    { id: 1, title: 'Task One', status: 'Complete' },
    { id: 2, title: 'Task Two', status: 'In Progress' },
    { id: 3, title: 'Task Three', status: 'Pending' },
  ]

  return NextResponse.json({
    success: true,
    data,
    timestamp: new Date().toISOString(),
  })
}

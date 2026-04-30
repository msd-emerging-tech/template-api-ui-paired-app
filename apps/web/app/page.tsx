'use client'

import { useState, useEffect } from 'react'

interface ExampleData {
  id: number
  title: string
  status: string
}

export default function Home() {
  const [data, setData] = useState<ExampleData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/example')
      .then(res => res.json())
      .then(result => {
        setData(result.data || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            API + UI Paired App
          </h1>
          <p className="text-gray-600 mb-8">
            Full-stack prototype template with Next.js frontend and API routes
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Frontend</h2>
              <p className="text-gray-600 text-sm">
                Next.js App Router with React and TypeScript
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Backend</h2>
              <p className="text-gray-600 text-sm">
                Next.js API routes for backend logic
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Example Data from API
            </h2>
            {loading ? (
              <p className="text-gray-600">Loading...</p>
            ) : (
              <div className="grid gap-3">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">ID: {item.id}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Available Endpoints
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /</code> - This page</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /health</code> - Health check</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/health</code> - API health check</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/example</code> - Example data</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /dashboard</code> - Dashboard page</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

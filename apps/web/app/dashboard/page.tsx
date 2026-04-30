export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-8">
            This is an example dashboard page. Add your metrics, charts, and data visualizations here.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-green-900 mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-green-600">89</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-purple-900 mb-2">API Calls</h3>
              <p className="text-3xl font-bold text-purple-600">45.2k</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

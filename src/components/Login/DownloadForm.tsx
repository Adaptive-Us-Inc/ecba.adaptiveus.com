import React, { useState } from 'react'

const DownloadForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      if (res.ok) {
        const blob = await res.blob()

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'ECBA-Leads.csv'
        link.click()
        setPassword('')
        setError(null)
      } else {
        const errorMessage = await res.text()
        setError(errorMessage || 'Failed to download the file')
      }
    } catch (err) {
      console.error('Download error:', err)
      setError('Error occurred while downloading the file.')
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col items-center justify-center">
        <div className="border p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl text-black font-bold mb-4">Download Leads CSV</h1>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleDownload} className="mb-4 w-full max-w-md">
            <div className="mb-2">
              <label htmlFor="username" className="block text-black text-lg">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border text-black focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black text-lg">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border text-black focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Downloading...' : 'Download CSV'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DownloadForm
{/* Login Form */ }

"use client"

import { useEffect, useState } from "react"

export default function BankComparison() {
  const [rates, setRates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch("/api/rates")
        const data = await res.json()
        setRates(data)
      } catch (error) {
        console.error("Failed to fetch rates", error)
      } finally {
        setLoading(false)
      }
    }
    fetchRates()
  }, [])

  if (loading) return <div className="text-center text-slate-500 py-10">Loading latest rates...</div>

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {rates.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow text-center">
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {item.bank}
          </div>
          <div className="text-5xl font-black text-blue-600 mb-4">
            {item.rate}<span className="text-2xl text-slate-400">%</span>
          </div>
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition-colors">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  )
}

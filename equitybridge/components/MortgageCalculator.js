"use client"

import { useState } from "react"
import { calculateMortgage } from "../lib/mortgage"

export default function MortgageCalculator() {
  const [price, setPrice] = useState(1000000)
  const [down, setDown] = useState(200000)
  const [rate, setRate] = useState(4)
  const [years, setYears] = useState(25)

  const monthly = calculateMortgage(price, down, rate, years)

  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-slate-100 max-w-md mx-auto w-full text-slate-800">
      
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Property Price (AED)</label>
        <input 
          type="number" 
          value={price}
          onChange={e => setPrice(Number(e.target.value))} 
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Down Payment (AED)</label>
        <input 
          type="number" 
          value={down}
          onChange={e => setDown(Number(e.target.value))} 
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Interest Rate (%)</label>
        <input 
          type="number" 
          step="0.1"
          value={rate}
          onChange={e => setRate(Number(e.target.value))} 
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Loan Term (Years)</label>
        <input 
          type="number" 
          value={years}
          onChange={e => setYears(Number(e.target.value))} 
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="pt-6 border-t border-slate-200 mt-6">
        <div className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</div>
        <div className="text-4xl font-extrabold text-blue-600">
          AED {monthly.toLocaleString()}
        </div>
      </div>

    </div>
  )
}

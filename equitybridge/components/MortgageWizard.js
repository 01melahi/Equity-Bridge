"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MortgageWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  function update(k, v) {
    setData({ ...data, [k]: v })
  }

  async function submit() {
    setLoading(true)
    try {
      await fetch("/api/mortgage", {
        method: "POST",
        body: JSON.stringify(data),
      })
      setStep(5) // Success step
    } catch (e) {
      alert("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100 min-h-[400px] flex flex-col justify-center">
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-8">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">What is your goal?</h2>
            <div className="grid grid-cols-1 gap-4">
              <button onClick={() => { update("purpose", "buy"); setStep(2) }} className="border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 p-6 rounded-xl text-lg font-medium transition-colors text-slate-700">
                Buy a Property
              </button>
              <button onClick={() => { update("purpose", "refinance"); setStep(2) }} className="border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 p-6 rounded-xl text-lg font-medium transition-colors text-slate-700">
                Refinance Existing Mortgage
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Estimated Property Price</h2>
            <div className="flex items-center justify-center">
              <span className="text-xl font-medium mr-2">AED</span>
              <input
                type="number"
                placeholder="1,000,000"
                className="border-b-2 border-slate-300 focus:border-blue-500 text-3xl font-bold text-center outline-none w-48 py-2 text-slate-800"
                onChange={e => update("price", e.target.value)}
              />
            </div>
            <button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors mt-8">
              Next
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Monthly Income</h2>
            <div className="flex items-center justify-center">
              <span className="text-xl font-medium mr-2">AED</span>
              <input
                type="number"
                placeholder="30,000"
                className="border-b-2 border-slate-300 focus:border-blue-500 text-3xl font-bold text-center outline-none w-48 py-2 text-slate-800"
                onChange={e => update("income", e.target.value)}
              />
            </div>
            <button onClick={() => setStep(4)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors mt-8">
              Next
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Your Details</h2>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                onChange={e => update("name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                onChange={e => update("phone", e.target.value)}
              />
            </div>
            <div className="text-center pt-4">
              <button 
                onClick={submit} 
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-full transition-colors w-full disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              ✓
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Application Received!</h2>
            <p className="text-slate-600 text-lg">One of our mortgage advisors will contact you shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

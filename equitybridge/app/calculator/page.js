import MortgageCalculator from "@/components/MortgageCalculator"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">Advanced Mortgage Calculator</h1>
      <MortgageCalculator />
    </div>
  )
}

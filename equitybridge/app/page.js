import Hero from "@/components/Hero"
import MortgageCalculator from "@/components/MortgageCalculator"
import BankComparison from "@/components/BankComparison"

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
          Mortgage Calculator
        </h2>
        <MortgageCalculator />
      </section>
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
          Compare Bank Rates
        </h2>
        <BankComparison />
      </section>
    </div>
  )
}

import MortgageWizard from "@/components/MortgageWizard"

export default function ApplyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">Apply for a Mortgage</h1>
      <MortgageWizard />
    </div>
  )
}

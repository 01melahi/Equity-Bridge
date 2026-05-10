import MortgageWizard from "@/components/MortgageWizard"

export default function WizardPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">Check Your Eligibility</h1>
      <MortgageWizard />
    </div>
  )
}

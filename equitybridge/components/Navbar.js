import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow bg-white text-black">
      <h1 className="text-xl font-bold">
        EquityBridge
      </h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/wizard" className="hover:text-blue-600 transition-colors">Eligibility</Link>
        <Link href="/calculator" className="hover:text-blue-600 transition-colors">Calculator</Link>
        <Link href="/properties" className="hover:text-blue-600 transition-colors">Properties</Link>
        <Link href="/apply" className="hover:text-blue-600 transition-colors">Apply</Link>
      </div>
    </nav>
  )
}

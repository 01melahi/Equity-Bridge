import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-32 text-center rounded-xl mx-4 mt-8 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Find the Best Mortgage in the UAE
        </h1>
        <p className="mt-6 text-xl text-slate-300">
          Compare bank rates instantly and secure your future home.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <Link href="/wizard">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-transform transform hover:scale-105 shadow-lg">
              Check Eligibility
            </button>
          </Link>
          <Link href="/properties">
            <button className="border-2 border-white hover:bg-white hover:text-slate-900 font-bold px-8 py-4 rounded-full transition-colors">
              Browse Properties
            </button>
          </Link>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

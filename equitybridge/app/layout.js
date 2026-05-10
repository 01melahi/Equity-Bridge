import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: "EquityBridge - UAE Mortgage Platform",
  description: "Find the best mortgage in the UAE",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <Navbar />
        <main className="pb-20">
          {children}
        </main>
      </body>
    </html>
  )
}

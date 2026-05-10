export function calculateMortgage(price, down, rate, years) {
  const loan = price - down
  const monthlyRate = rate / 100 / 12
  const payments = years * 12

  if (monthlyRate === 0) return Math.round(loan / payments)

  const monthly =
    (loan * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -payments))

  return Math.round(monthly)
}

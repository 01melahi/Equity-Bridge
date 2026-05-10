export async function GET() {
  const rates = [
    { bank: "Emirates NBD", rate: 3.9 },
    { bank: "ADCB", rate: 4.0 },
    { bank: "Mashreq", rate: 4.1 }
  ]
  return Response.json(rates)
}

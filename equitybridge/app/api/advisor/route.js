import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY || "placeholder-key"
})

export async function POST(req) {
  try {
    const { question } = await req.json()

    // If there is no real API key, return a mock response for local demo
    if (!process.env.OPENAI_KEY || process.env.OPENAI_KEY === "placeholder-key") {
      return Response.json({
        answer: "This is a mock response from the AI Mortgage Advisor. Please add your OPENAI_KEY to .env.local to enable real AI responses."
      })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a UAE mortgage advisor. Answer questions concisely." },
        { role: "user", content: question }
      ]
    })

    return Response.json({
      answer: completion.choices[0].message.content
    })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

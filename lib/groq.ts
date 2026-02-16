import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function chatWithGroq(content: string) {
  const chatCompletion = await getGroqChatCompletion(content);

  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(content: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}

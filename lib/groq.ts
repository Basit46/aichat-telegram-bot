import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function chatWithGroq(content: string) {
  let chatCompletion: any = "";

  try {
    const res = await getGroqChatCompletion(content || "hello");
    chatCompletion = res.choices[0]?.message?.content || "";
  } catch {
    chatCompletion = "Not available";
  }

  return chatCompletion;
}

export async function getGroqChatCompletion(content: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Reply using Telegram-compatible HTML only. Allowed tags: <b>, <i>, <code>, <pre>, <a>. No markdown.",
      },
      {
        role: "user",
        content,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}

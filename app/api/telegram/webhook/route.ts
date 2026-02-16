import { NextRequest, NextResponse } from "next/server";
import { sendMessage } from "@/lib/telegram";
import { chatWithGroq } from "@/lib/groq";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const message = body.message;
  if (!message) return NextResponse.json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text;

  if (text === "/start") {
    await sendMessage(chatId, `Hi ${message.from.username}`);
  } else {
    const res = await chatWithGroq(text);
    await sendMessage(chatId, `${res}`);
  }

  return NextResponse.json({ ok: true });
}

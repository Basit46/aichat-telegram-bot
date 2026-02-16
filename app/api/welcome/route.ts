import { sendMessage } from "@/lib/telegram";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("bayewo");

  try {
    await sendMessage(22, "Hi");
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json({ message: "Welcome to your bot" });
}

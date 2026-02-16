import axios from "axios";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;

export async function sendMessage(chatId: number, text: string) {
  return axios.post(`${BASE_URL}/sendMessage`, {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
  });
}

import { Bot } from "grammy";
import { sleep } from "./commonUtils";

let bot: Bot | undefined = undefined;

export const batchSendBotMessages = async (
  ids: string[] | undefined,
  content: string
) => {
  if (!ids) {
    return;
  }

  let index = 0;
  let batchIds = ids.slice(index * 100, (index + 1) * 100);

  while (batchIds.length > 0) {
    batchIds.forEach((id) => {
      sendBotMessage(id, content);
    });
    await sleep(2000);

    index++;
    batchIds = ids.slice(index * 100, (index + 1) * 100);
    console.log({ batchIds });
  }
};

export const sendBotMessage = async (id: string, content: string) => {
  if (!bot) {
    bot = new Bot(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "");
  }
  bot?.api?.sendMessage(id, content).catch((err) => {
    console.log("Bot sendMessage error:", err);
  });
};

import { LeaderboardResponseItem, TelegramUser } from "@/interfaces/api";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getUsername = (item: LeaderboardResponseItem) => {
  if (!item.userMaps || item.userMaps.length === 0) {
    return item.id + "";
  }
  return getTelegramDisplayName(item.userMaps[0].telegram_user_info);
};

export function getTelegramDisplayName(user?: TelegramUser) {
  if (!user) {
    return "";
  }
  return user.firstName || user.lastName || user.id + "";
}

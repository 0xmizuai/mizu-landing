export interface OverallMetricsResponse {
  totalUserPointCount: number;
}

export interface UserTrackMetricsResponse {
  activeUserCount: number;
  inactiveUserCount: number;
}

export interface TelegramUser {
  id: number;
  firstName: string;
  lastName?: string;
  username?: string;
}

export interface LeaderboardResponseItem {
  id: string;
  user_key: string;
  claimed_point: number;
  userMaps: { telegram_user_info?: TelegramUser }[];
  userPhotos: { photo_url?: string }[];
}

export interface UserItem {
  user_key: string;
  username: string;
}

export interface UsersResponse {
  totalCount: number;
  users: UserItem[];
}

export interface ChannelMemberUpdateRequestData {
  channelId: string;
  userKey: string;
  username: string;
  type: "leave" | "join";
}

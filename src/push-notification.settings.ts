export interface PushNotificationSettings {
  body?: string;
  icon?: string;
  sound?: string;
  data?: any;
  tag?: string;
  dir?: NotificationDirection;
  lang?: string;
  renotify?: boolean;
  sticky?: boolean;
  vibrate?: Array<number>;
  noscreen?: boolean;
  silent?: boolean;
  closeDelay?: number;
}

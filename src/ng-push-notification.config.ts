import { InjectionToken } from '@angular/core';

import { PushNotificationSettings } from './ng-push-notification.settings';

export const DEFAULT_NOTIFICATION_SETTINGS = new InjectionToken<PushNotificationSettings>('DEFAULT_NOTIFICATION_SETTINGS');

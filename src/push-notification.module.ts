import { NgModule } from '@angular/core';

import { PushNotificationService } from './push-notification.service';
import { PushNotificationSettings } from './push-notification.settings';
import { DEFAULT_NOTIFICATION_SETTINGS } from './push-notification.config';

@NgModule({})
export class PushNotificationModule {
  static forRoot(config?: PushNotificationSettings) {
    return {
      ngModule: PushNotificationModule,
      providers: [
        {provide: DEFAULT_NOTIFICATION_SETTINGS, useValue: config},
        PushNotificationService,
      ],
    };
  }
}

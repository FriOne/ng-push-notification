import { ModuleWithProviders, NgModule } from '@angular/core';

import { PushNotificationService } from './ng-push-notification.service';
import { PushNotificationSettings } from './ng-push-notification.settings';
import { DEFAULT_NOTIFICATION_SETTINGS } from './ng-push-notification.config';

@NgModule({})
export class PushNotificationModule {
  static forRoot(config?: PushNotificationSettings): ModuleWithProviders<PushNotificationModule> {
    return {
      ngModule: PushNotificationModule,
      providers: [
          {provide: DEFAULT_NOTIFICATION_SETTINGS, useValue: config},
          PushNotificationService,
      ],
    };
  }
}

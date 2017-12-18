# Push notification service for Angular 4+
Simple push notification service to show Web Notifications.

```sh
    npm install ng-push-notification
```

How to import:
```typescript
  import { PushNotificationModule } from 'ng-push-notification';

  @NgModule({
    ...,
    import: [
      ...,
      PushNotificationModule.forRoot(/* Default settings here, interface PushNotificationSettings */),
    ],
  })
  export class AppModule {}
```

How to cook:
```typescript
import { PushNotificationService } from 'ng-push-notification';

export class SomeComponent {
  constructor(
    private pushNotification: PushNotificationService,
  ) {}

  showPush() {
    this.pushNotification.show(
      'Show me that message!',
      {/* any settings, e.g. icon */},
      6000, // close delay.
    );
    // Or simply this:
    this.pushNotification.show('And that too!');
  }

  async showAnotherPush() {
    const notification = await this.pushNotification.show('Returns promise with Notification object.');
    setTimeout(() => notification.close(), 1000);
  }
}
```

Full list of settings(description is [here](https://developer.mozilla.org/en-US/docs/Web/API/notification)):
```typescript
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
```

Default settings are these:
```typescript
{
    dir: 'auto',
    lang: 'en-US',
    renotify: false,
    sticky: false,
    noscreen: false,
    silent: true,
    closeDelay: 6000,
}
```

The service also has these rxjs subjects:
```typescript
shown$ = new Subject<Notification>();
closed$ = new Subject<Notification>();
error$ = new Subject<Notification>();
click$ = new Subject<{event: any, notification: Notification}>();
```

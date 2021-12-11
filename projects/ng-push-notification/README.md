# NgPushNotification

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

# Push notification service
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

## Code scaffolding

Run `ng generate component component-name --project ng-push-notification` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-push-notification`.
> Note: Don't forget to add `--project ng-push-notification` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-push-notification` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ng-push-notification`, go to the dist folder `cd dist/ng-push-notification` and run `npm publish`.

## Running unit tests

Run `ng test ng-push-notification` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

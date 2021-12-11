import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';

import { PushNotificationSettings } from './ng-push-notification.settings';
import { DEFAULT_NOTIFICATION_SETTINGS } from './ng-push-notification.config';

@Injectable()
export class PushNotificationService {
  shown$ = new Subject<Notification>();
  closed$ = new Subject<Notification>();
  error$ = new Subject<Notification>();
  click$ = new Subject<{event: any, notification: Notification}>();

  private defaultCloseDelay: number;
  private defaultSettings: any;
  private instances: Notification[] = [];

  constructor(injector: Injector) {
    const defaultSettings = injector.get<PushNotificationSettings>(DEFAULT_NOTIFICATION_SETTINGS);
    this.defaultSettings = Object.assign({
      dir: 'auto',
      lang: 'en-US',
      renotify: false,
      sticky: false,
      noscreen: false,
      silent: true,
    }, defaultSettings || {});
    this.defaultCloseDelay = this.defaultSettings.closeDelay === undefined ? 6000 : this.defaultSettings.closeDelay;
  }

  checkCompatibility() {
    return !!('Notification' in window);
  }

  async requestPermission(): Promise<boolean> {
    const permission = await Notification.requestPermission();
    return (permission === 'granted');
  }

  async show(title: string, settings = {}, closeDelay = this.defaultCloseDelay): Promise<Notification> {
    if (!this.checkCompatibility()) {
      throw new Error('Notification API not available in this browser.');
    }

    const permission = await this.requestPermission();

    if (!permission) {
      throw new Error('Permission was not granted.');
    }

    const notificationSettings = {...this.defaultSettings, ...settings};

    return this.create(title, notificationSettings, closeDelay);
  }

  closeAll(): void {
    this.instances.forEach(notification => notification.close());
    this.instances = [];
  }

  private create(title: string, settings: PushNotificationSettings, closeDelay = 0) {
    let notification = new Notification(title, settings);

    this.instances.push(notification);
    this.attachEventHandlers(notification);

    if (closeDelay) {
      setTimeout(() => notification.close(), closeDelay);
    }
    return notification;
  }

  private attachEventHandlers(notification: Notification): void {
    notification.onshow = () => {
      this.shown$.next(notification);
    };
    notification.onclick = (event: any) => {
      this.click$.next({event, notification});
    };
    notification.onerror = () => {
      this.error$.next(notification);
    };
    notification.onclose = () => {
      this.closed$.next(notification);
    };
  }
}

import { Component } from '@angular/core';
import { PushNotificationService } from 'ng-push-notification'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pushNotification: PushNotificationService) {}

  showPush() {
    this.pushNotification.show('Show me that message!', {}, 6000);
    this.pushNotification.show('And that too!');
  }

  async showAutoClosePush() {
    const notification = await this.pushNotification.show('Returns promise with Notification object.');

    setTimeout(() => notification.close(), 1000);
  }
}

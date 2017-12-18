import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgPushNotificationModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgPushNotificationModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PendingAppComponent } from './component/pending/pending.component';
import { ReceivedAppComponent } from './component/received/received.component';
import { RejectedAppComponent } from './component/rejected/rejected.component';
import { VerifiedAppComponent } from './component/verified/verified.component';
import { PendingComponent } from './pending/pending.component';
import { ReceivedComponent } from './received/received.component';
import { RejectedComponent } from './rejected/rejected.component';
import { VerifiedComponent } from './verified/verified.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    PendingAppComponent,
    ReceivedAppComponent,
    RejectedAppComponent,
    VerifiedAppComponent,
    PendingComponent,
    ReceivedComponent,
    RejectedComponent,
    VerifiedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

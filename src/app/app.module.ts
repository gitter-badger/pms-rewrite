import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ApplicationStatesComponent } from './component/application-states/application-states.component';
import { NewPensionComponent } from './component/new-pension/new-pension.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { ServiceInfoComponent } from './component/service-info/service-info.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PensionableInfoComponent } from './component/pensionable-info/pensionable-info.component';
import { PaymentInfoComponent } from './component/payment-info/payment-info.component';



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
    NewPensionComponent,
    PersonalInfoComponent,
    ServiceInfoComponent,
    //StepsComponent,
    ApplicationStatesComponent,
    NewPensionComponent,
    PersonalInfoComponent,
    ServiceInfoComponent,
    HeaderComponent,
    DashboardComponent
    DashboardComponent,
    PensionableInfoComponent,
    PaymentInfoComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        {path: '' ,           component:DashboardComponent},
        {path: 'dashboard' ,  component:DashboardComponent},
      ],
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

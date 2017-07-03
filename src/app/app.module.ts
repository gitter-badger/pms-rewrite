import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PendingComponent } from './component/pending/pending.component';
import { ReceivedComponent } from './component/received/received.component';
import { RejectedComponent } from './component/rejected/rejected.component';
import { VerifiedComponent } from './component/verified/verified.component';
import { ApplicationStatesComponent } from './component/application-states/application-states.component';
import { NewPensionComponent } from './component/new-pension/new-pension.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { ServiceInfoComponent } from './component/service-info/service-info.component';
import { HeaderComponent } from './component/header/header.component';
import { PensionableInfoComponent } from './component/pensionable-info/pensionable-info.component';
import { PaymentInfoComponent } from './component/payment-info/payment-info.component';
import { MarriedInfoComponent } from './component/married-info/married-info.component';
import { DependentInfoComponent } from './component/dependent-info/dependent-info.component';
import { WnopRefundComponent } from './component/wnop-refund/wnop-refund.component';
import { BankInfoComponent } from './component/bank-info/bank-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    PendingComponent,
    ReceivedComponent,
    RejectedComponent,
    VerifiedComponent,
    NewPensionComponent,
    PersonalInfoComponent,
    ServiceInfoComponent,
    //StepsComponent,
    ApplicationStatesComponent,
    NewPensionComponent,
    PersonalInfoComponent,
    ServiceInfoComponent,
    HeaderComponent,
    DashboardComponent,
    PensionableInfoComponent,
    PaymentInfoComponent,
    MarriedInfoComponent,
    DependentInfoComponent,
    WnopRefundComponent,
    BankInfoComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        {path: '' ,                  component:DashboardComponent},
        {path: 'dashboard' ,         component:DashboardComponent},
        {path: 'new-pension' ,       component:NewPensionComponent},
        {path: 'payment',            component:PaymentInfoComponent},
        {path: 'pensionable',        component:PensionableInfoComponent},
        {path: 'personal-info',      component:PersonalInfoComponent},
        {path: 'service-info',       component:ServiceInfoComponent},
        {path: 'application-state',  component:ApplicationStatesComponent},
        {path: 'dependent-info',     component:DependentInfoComponent},
        {path: 'bank-info',          component:BankInfoComponent},

      ],
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

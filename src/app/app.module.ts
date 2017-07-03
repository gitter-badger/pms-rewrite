import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ApplicationStatesComponent } from './component/application-states/application-states.component';
import { NewPensionComponent } from './component/new-pension/new-pension.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { ServiceInfoComponent } from './component/service-info/service-info.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        {path: '' , component:DashboardComponent},
        {path: 'dashboard' , component:DashboardComponent}
      ],
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

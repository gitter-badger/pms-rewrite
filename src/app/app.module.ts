import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { NewpensionComponent } from './component/newpension/newpension.component';
import { PersonalinfoComponent } from './component/personalinfo/personalinfo.component';
import { ServiceinfoComponent } from './component/serviceinfo/serviceinfo.component';
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
    NewpensionComponent,
    PersonalinfoComponent,
    ServiceinfoComponent,
    StepsComponent,
    ApplicationStatesComponent,
    NewPensionComponent,
    PersonalInfoComponent,
    ServiceInfoComponent
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

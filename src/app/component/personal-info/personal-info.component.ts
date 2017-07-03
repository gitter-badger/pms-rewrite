import { Component, OnInit } from '@angular/core';
import appState from '../../stores/appState'
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  appState = appState;
  constructor() {
    this.appState.setApplication("personal-infomation");
  }

  ngOnInit() {
  }

}

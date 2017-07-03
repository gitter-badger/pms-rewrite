import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import appState from '../../stores/appState';

@Component({
  selector: 'app-application-states',
  templateUrl: './application-states.component.html',
  styleUrls: ['./application-states.component.css']
})
export class ApplicationStatesComponent implements OnInit {
  appState = appState;
  constructor (private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {}
  openTab(state){
    this.appState.setApplication(state);
    this.router.navigate(["/application-state", state ]);
  }
}

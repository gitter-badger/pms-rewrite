import { Component, OnInit } from '@angular/core';
import store from '../../stores/store';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  store = store;
  constructor() { }

  ngOnInit() {
  }

}

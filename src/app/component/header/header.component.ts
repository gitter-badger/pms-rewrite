import { Component, OnInit } from '@angular/core';
import store from '../../stores/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  store = store;
  constructor() {
  }

  btnClick(){
    store.title = "Fine";
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tabbar',
  templateUrl: './header-tabbar.component.html',
  styleUrls: ['./header-tabbar.component.css']
})
export class HeaderTabbarComponent implements OnInit {

  serviceCenterTag: boolean = false;
  accountTag: boolean = false;
  isLogin: boolean = true;
  userId: string = "test";
  constructor() { }

  ngOnInit(): void {
  }
  accountTagHover() {

    this.accountTag = true
  }
  accountTagLeave() {
    this.accountTag = false
  }
  serviceCenterHover() {
    this.serviceCenterTag = true
  }
  serviceCenterLeave() {

    this.serviceCenterTag = false
  }

}

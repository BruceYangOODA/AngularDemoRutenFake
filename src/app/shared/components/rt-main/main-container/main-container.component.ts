import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  adpanel: number = 1;
  ltpanel: number = 1;
  lmpanel: number = 1;
  lbpanel: number = 1;
  rtpanel: number = 1;
  rmpanel: number = 1;
  rbpanel: number = 1;
  bbpanel: number = 1;
  blpanel: number = 1;
  brpanel: number = 1;
  pushTag: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  adPanelEnter(index: number) {    
    this.adpanel = index;
  }
  ltPanelEnter(index: number) {
    this.ltpanel = index;
  }
  lmPanelEnter(index: number) {
    this.lmpanel = index;
  }
  lbPanelEnter(index: number) {
    this.lbpanel = index;
  }
  rtPanelEnter(index: number) {
    this.rtpanel = index;
  }
  rmPanelEnter(index: number) {
    this.rmpanel = index;
  }
  rbPanelEnter(index: number) {
    this.rbpanel = index;
  }
  bbPanelEnter(index: number) {
    this.bbpanel = index;
  }
  blPanelEnter(index: number) {
    this.blpanel = index;
  }
  brPanelEnter(index: number) {
    this.brpanel = index;
  }

}

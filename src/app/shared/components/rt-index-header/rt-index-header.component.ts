import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-index-header',
  templateUrl: './rt-index-header.component.html',
  styleUrls: ['./rt-index-header.component.css']
})
export class RtIndexHeaderComponent implements OnInit {
  ItemsCount: number = 581113732;
  HotSearchItems: Array<string> = [
    '運動水壺',
    '領超取免運券',
    '破曉傳奇',
    '真骨彫',
    '充電線',
    '熱風槍',
    '3m口罩',
    '小米手環',
    '電烤盤'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

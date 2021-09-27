import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-indexpanel',
  templateUrl: './header-indexpanel.component.html',
  styleUrls: ['./header-indexpanel.component.css']
})
export class HeaderIndexpanelComponent implements OnInit {

  totalItems: number = 561836070;
  searchKey: string = '';
  searchItems: Array<string> = []
  hotSearchItems: Array<string> = []
  isSearchInputFocus: boolean = false;
  searchMode: number = 0;
  sellTagHover: boolean = false;
  mybidTagHover: boolean = false;
  messagerTagHover: boolean = false;
  cartTagHover: boolean = false;
  /*@ViewChild("searchInput") searchInput!: ElementRef;*/
  constructor() { }

  ngOnInit(): void {
    this.hotSearchItems = [
      '手機殼','破曉傳奇','電烤盤','iphone13','hololive','真骨彫',
      '領超取免運卷','充電線','3m口罩'
    ]
  }

  searchInputChange() {
    if(this.searchKey =='') {
      this.searchItems = []
    }
    else {
      this.searchItems = ['aa','ab','abc']
    }      
    
  }

  searchInputFocus() {
    this.isSearchInputFocus = true;
  }
  searchInputBlur() {
    this.isSearchInputFocus = false;
  }

  searchBtnClick() {
    console.log('searchBtnClick',this.searchMode)
  }

  sellTagEnter() { this.sellTagHover = true; }
  sellTagLeave() { this.sellTagHover = false; }
  mybidTagEnter() { this.mybidTagHover = true; }
  mybidTagLeave() { this.mybidTagHover = false; }
  messagerTagEnter() { this.messagerTagHover = true; }
  messagerTagLeave() { this.messagerTagHover = false; }
  cartTagEnter() { this.cartTagHover = true; }
  cartTagLeave() { this.cartTagHover = false; }

}

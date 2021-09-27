import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SlideDetail, AdsDetail } from '../../../models/dataModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fk-main-container',
  templateUrl: './fk-main-container.component.html',
  styleUrls: ['./fk-main-container.component.css']
})
export class FkMainContainerComponent implements OnInit {
  textAds: Observable<Array<string>> = of([
    "【PS4 & Switch】免運優惠中＞＞",
    "機能消臭10秒有感",
    "外拍風景 NIKON最真",
    "爆品5折 $0免運"
  ])
  Slide1$!: Observable<SlideDetail>;
  Slide2$!: Observable<SlideDetail>;
  Slide3$!: Observable<SlideDetail>;
  Slide4$!: Observable<SlideDetail>;
  Slide5$!: Observable<SlideDetail>;
  Slide6$!: Observable<SlideDetail>;
  Slide7$!: Observable<SlideDetail>;
  Slide8$!: Observable<SlideDetail>;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.Slide1$ = this.http.get<SlideDetail>("./assets/json/slide1.json");
    this.Slide2$ = this.http.get<SlideDetail>("./assets/json/slide2.json");
    this.Slide3$ = this.http.get<SlideDetail>("./assets/json/slide3.json");
    this.Slide4$ = this.http.get<SlideDetail>("./assets/json/slide4.json");
    this.Slide5$ = this.http.get<SlideDetail>("./assets/json/slide5.json");
    this.Slide6$ = this.http.get<SlideDetail>("./assets/json/slide6.json");
    this.Slide7$ = this.http.get<SlideDetail>("./assets/json/slide7.json");
    this.Slide8$ = this.http.get<SlideDetail>("./assets/json/slide8.json");    
  }

  test() {
    return "background-image: url('/assest/images/test2.jpg')"
  }

}

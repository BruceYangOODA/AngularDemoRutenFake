import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SlideDetail, AdsDetail } from '../../../../models/dataModel';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fk-ad-etc',
  templateUrl: './fk-ad-etc.component.html',
  styleUrls: ['./fk-ad-etc.component.css']
})
export class FkAdEtcComponent implements OnInit {
  adsDetails$!: Observable<AdsDetail>;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.adsDetails$ = this.http.get<AdsDetail>("./assets/json/ads.json");
  }

}

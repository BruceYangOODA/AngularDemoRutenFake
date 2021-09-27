import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SlideDetail } from '../../../../models/dataModel';

@Component({
  selector: 'app-slidebox',
  templateUrl: './slidebox.component.html',
  styleUrls: ['./slidebox.component.css']
})
export class SlideboxComponent implements OnInit {

  slideIndex:number = 0;
  /*
  SlideDetails:SlideDetail = {
    slideTags: ["刷J卡4%回饋","擺脫訊號死角","領卷再現折","省水高壓過濾","限量下殺"],
    slidePicLinks: ["/assets/images/ahd/487300_1630464544.jpg","/assets/images/ahd/487x300_0922_01.jpg","/assets/images/ahd/487x300_0922_04.jpg","/assets/images/ahd/_蓮蓬頭贈3濾心245.jpg","/assets/images/ahd/4873001_1632274710.jpg"]
  };*/
  @Input() SlideDetails!: SlideDetail | null;

  constructor() { }

  ngOnInit(): void {
  }

  slideTagHover(index: number) {
    this.slideIndex = index;
  }
  test() {
    this.slideIndex += 1;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-header',
  templateUrl: './rt-header.component.html',
  styleUrls: ['./rt-header.component.css']
})
export class RtHeaderComponent implements OnInit {

  UserId: string="test";
  constructor() { }

  ngOnInit(): void {
  }

}

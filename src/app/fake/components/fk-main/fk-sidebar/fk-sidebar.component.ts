import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDetail } from'../../../models/dataModel'


@Component({
  selector: 'app-fk-sidebar',
  templateUrl: './fk-sidebar.component.html',
  styleUrls: ['./fk-sidebar.component.css']
})
export class FkSidebarComponent implements OnInit {
  categoryTitle = '電腦、電子、周邊'
  categoryItems = [' 筆記型電腦 ',' 筆記型電腦專用配件 ',' 平板電腦 ',' 桌上型電腦 ',' 電腦周邊設備 ',' 電腦周邊耗材 ',' 電腦軟體 ',
  ' 租賃、出租 ',' 電腦零組件 ',' 電子零件、材料 ',' 電子字典 ',' 電腦保養 ',' 網路設備 ',' 電子儀器、測量 ',
  ' 貿易製造 ',' 化工、容器材料、儀器 ',' 線材、轉接頭 ',' 高科技、機器人 ',' GPS / 穿戴 / 導航 ',' 電腦、網路諮詢@ ',' 代買、海外代購 ',
' 工商設備 ']
  categoryStyle = ['-100px','0px','#40b2e6']
  categoryBundle: Array<any> = [this.categoryTitle, this.categoryItems,this.categoryStyle]
  categoryBundles$!: Observable<Array<CategoryDetail>>
  constructor(private http :HttpClient) { 
    
  }

  ngOnInit(): void {
    this.categoryBundles$ = this.http.get<Array<CategoryDetail>>('./assets/json/category.json')
  }

}

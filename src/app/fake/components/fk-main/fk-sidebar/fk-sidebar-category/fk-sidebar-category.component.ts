import { Component, Input, OnInit } from '@angular/core';
import { CategoryDetail } from '../../../../models/dataModel'

@Component({
  selector: 'app-fk-sidebar-category',
  templateUrl: './fk-sidebar-category.component.html',
  styleUrls: ['./fk-sidebar-category.component.css']
})
export class FkSidebarCategoryComponent implements OnInit {

  @Input() categoryBundle!: CategoryDetail
  /*@Input() categoryItems!: Array<string>*/
  categoryTitleHover: boolean = false;
  constructor() { }

  ngOnInit(): void {    
    console.log('bul',this.categoryBundle)
  }

  getHotTitle() {
    return '前往 '+this.categoryBundle.categoryTitle+' 熱門銷售頁面'
  }
  getCustomerStyle() {
    return 'background-position: '
            +this.categoryBundle.categoryStyle[0] + ' '
            +this.categoryBundle.categoryStyle[1] +'; background-color: '
            +this.categoryBundle.categoryStyle[2] +';'
  }
  categoryTagEnter() { this.categoryTitleHover = true; }
  categoryTagLeave() { this.categoryTitleHover = false; }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtHeaderComponent } from './components/rt-header/rt-header.component';
import { RtHomeComponent } from './components/rt-home/rt-home.component';
import { RtIndexHeaderComponent } from './components/rt-index-header/rt-index-header.component';
import { RtMainComponent } from './components/rt-main/rt-main.component';
import { RtSidebarComponent } from './components/rt-main/rt-sidebar/rt-sidebar.component';
import { MainContainerComponent } from './components/rt-main/main-container/main-container.component'


@NgModule({
  declarations: [
    RtHeaderComponent,
    RtHomeComponent,
    RtIndexHeaderComponent,
    RtMainComponent,
    RtSidebarComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

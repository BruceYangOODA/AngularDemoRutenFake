import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeComponent } from './fake.component';
import { FkHeaderComponent } from './components/fk-header/fk-header.component';
import { HeaderTabbarComponent } from './components/fk-header/header-tabbar/header-tabbar.component';
import { HeaderIndexpanelComponent } from './components/fk-header/header-indexpanel/header-indexpanel.component';
import { FormsModule } from '@angular/forms';
import { FkMainComponent } from './components/fk-main/fk-main.component';
import { FkSidebarComponent } from './components/fk-main/fk-sidebar/fk-sidebar.component';
import { FkMainContainerComponent } from './components/fk-main/fk-main-container/fk-main-container.component';
import { FkSidebarHotzoneComponent } from './components/fk-main/fk-sidebar/fk-sidebar-hotzone/fk-sidebar-hotzone.component';
import { FkMainAdComponent } from './components/fk-main/fk-main-ad/fk-main-ad.component';
import { FkSidebarCategoryComponent } from './components/fk-main/fk-sidebar/fk-sidebar-category/fk-sidebar-category.component';
import { HttpClientModule } from '@angular/common/http';
import { SlideboxComponent } from './components/fk-main/fk-main-container/slidebox/slidebox.component';
import { FkAdEtcComponent } from './components/fk-main/fk-main-container/fk-ad-etc/fk-ad-etc.component';

@NgModule({
  declarations: [
    FakeComponent,
    FkHeaderComponent,
    HeaderTabbarComponent,
    HeaderIndexpanelComponent,
    FkMainComponent,
    FkSidebarComponent,
    FkMainContainerComponent,
    FkSidebarHotzoneComponent,
    FkMainAdComponent,
    FkSidebarCategoryComponent,
    SlideboxComponent,
    FkAdEtcComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //HttpClientModule
  ]
})
export class FakeModule { }

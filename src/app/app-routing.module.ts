import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassComponent } from './components/glass/glass.component';
import { FakeComponent } from './fake/fake.component';
import { RtHomeComponent } from './shared/components/rt-home/rt-home.component';

const routes: Routes = [
  {
    path: '',
    component: RtHomeComponent
  },
  {
    path: 'glass',
    component: GlassComponent
  },
  {
    path: 'fake',
    component: FakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

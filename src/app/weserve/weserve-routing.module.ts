import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeserveComponent } from './weserve.component';

const routes: Routes = [
  {
    path: '',
    component: WeserveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeserveRoutingModule { }

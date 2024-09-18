import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OursComponent } from './ours.component';

const routes: Routes = [

  {
    path: '',
    component: OursComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OursRoutingModule { }

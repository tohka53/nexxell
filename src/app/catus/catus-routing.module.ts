import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatusComponent } from './catus.component';

const routes: Routes = [

  {
    path: '',
    component: CatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatusRoutingModule { }

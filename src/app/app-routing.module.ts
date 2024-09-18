import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule)
  },  {
    path: 'catus',
    loadChildren: () => import('./catus/catus.module').then(m => m.CatusModule)
  },
  {
    path: 'weserve',
    loadChildren: () => import('./weserve/weserve.module').then(m => m.WeserveModule)
  },
  {
    path: 'ours',
    loadChildren: () => import('./ours/ours.module').then(m => m.OursModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

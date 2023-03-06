import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add-edit-p/add-edit-p.module').then( m => m.AddEditPPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: ()=> import('./pages/add-edit-p/add-edit-p.module').then(m => m.AddEditPPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

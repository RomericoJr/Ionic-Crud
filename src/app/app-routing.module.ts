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
  {
    path: 'addCategoria',
    loadChildren: () => import('./pages/add-edit-categoria/add-edit-categoria.module').then( m => m.AddEditCategoriaPageModule)
  },
  {
    path: 'editCategoria/:id',
    loadChildren: () => import('./pages/add-edit-categoria/add-edit-categoria.module').then( m => m.AddEditCategoriaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

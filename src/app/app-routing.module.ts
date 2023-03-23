import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./pages/inicio/inicio-routing.module').then(m => m.InicioPageRoutingModule)

  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs-routing.module').then(m => m.TabsPageRoutingModule)
  },
  {
    path: 'tabs',
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

  {
    path: 'logout',
    loadChildren: () => import('./auth/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'profile-user',
    loadChildren: () => import('./auth/profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
  },
  {
    path: 'favorito',
    loadChildren: () => import('./pages/favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

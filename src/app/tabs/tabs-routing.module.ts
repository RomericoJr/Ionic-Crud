
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'profile-user',
        loadChildren: () => import('../auth/profile-user/profile-user-routing.module').then(m => m.ProfileUserPageRoutingModule)
      },
      {
      path: 'add',
      loadChildren: () => import('./../pages/add-edit-p/add-edit-p.module').then( m => m.AddEditPPageModule)
    },
    {
      path: 'edit/:id',
      loadChildren: ()=> import('./../pages/add-edit-p/add-edit-p.module').then(m => m.AddEditPPageModule)
    },
    {
      path: 'addCategoria',
      loadChildren: () => import('./../pages/add-edit-categoria/add-edit-categoria.module').then( m => m.AddEditCategoriaPageModule)
    },
    {
      path: 'editCategoria/:id',
      loadChildren: () => import('./../pages/add-edit-categoria/add-edit-categoria.module').then( m => m.AddEditCategoriaPageModule)
    },
   {
    path: 'favorito',
    loadChildren: () => import('../pages/favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('../pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

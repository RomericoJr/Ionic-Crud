import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditCategoriaPage } from './add-edit-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditCategoriaPageRoutingModule {}

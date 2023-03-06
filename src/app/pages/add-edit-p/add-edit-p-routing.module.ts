import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditPPage } from './add-edit-p.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditPPageRoutingModule {}

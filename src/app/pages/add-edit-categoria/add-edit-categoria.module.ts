import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditCategoriaPageRoutingModule } from './add-edit-categoria-routing.module';

import { AddEditCategoriaPage } from './add-edit-categoria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditCategoriaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AddEditCategoriaPage]
})
export class AddEditCategoriaPageModule {}

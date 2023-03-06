import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditPPageRoutingModule } from './add-edit-p-routing.module';

import { AddEditPPage } from './add-edit-p.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditPPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddEditPPage]
})
export class AddEditPPageModule {}

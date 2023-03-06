import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { HearderComponent } from './hearder/hearder.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    HearderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule
  ],
  exports: [
    CardsComponent,
    HearderComponent
  ]
})
export class ComponentsModule { }

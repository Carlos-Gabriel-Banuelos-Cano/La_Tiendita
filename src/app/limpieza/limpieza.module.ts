import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpiezaPageRoutingModule } from './limpieza-routing.module';

import { LimpiezaPage } from './limpieza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpiezaPageRoutingModule
  ],
  declarations: [LimpiezaPage]
})
export class LimpiezaPageModule {}

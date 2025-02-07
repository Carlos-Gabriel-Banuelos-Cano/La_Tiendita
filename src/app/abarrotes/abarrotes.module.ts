import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbarrotesPageRoutingModule } from './abarrotes-routing.module';

import { AbarrotesPage } from './abarrotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbarrotesPageRoutingModule
  ],
  declarations: [AbarrotesPage]
})
export class AbarrotesPageModule {}

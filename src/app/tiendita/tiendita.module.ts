import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TienditaRoutingModule } from './tiendita-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


@NgModule({
  declarations: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    TienditaRoutingModule
  ],
  exports: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent
  ]
})
export class TienditaModule { }

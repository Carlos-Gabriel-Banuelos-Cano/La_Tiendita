import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TienditaRoutingModule } from './tiendita-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { BannerComponent } from '../components/pages/banner/banner.component';
import { HeaderComponent } from '../components/pages/header/header.component';
import { FooterComponent } from '../components/pages/footer/footer.component';
import { LimpiezaComponent } from './pages/limpieza/limpieza.component';
import { DulceriaComponent } from './pages/dulceria/dulceria.component';


@NgModule({
  declarations: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LimpiezaComponent,
    DulceriaComponent
  ],
  imports: [
    CommonModule,
    TienditaRoutingModule,
  ],
  exports: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent
  ]
})
export class TienditaModule { }

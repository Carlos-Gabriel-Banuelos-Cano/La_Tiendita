import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TienditaRoutingModule } from './tiendita-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { BannerComponent } from '../components/pages/banner/banner.component';
import { HeaderComponent } from '../components/pages/header/header.component';
import { FooterComponent } from '../components/pages/footer/footer.component';
import { DulceriaComponent } from './pages/dulceria/dulceria.component';
import { LimpiezaComponent } from './pages/limpieza/limpieza.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { BarraComponent } from '../components/pages/barra/barra.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { RegistroClientesComponent } from './pages/registro-clientes/registro-clientes.component';
import { RegistroProductosComponent } from './pages/registro-productos/registro-productos.component';
import { RegistroUsuariosComponent } from './pages/registro-usuarios/registro-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    BarraComponent,
    
    DulceriaComponent,
          LimpiezaComponent,
          NosotrosComponent,
          ContactoComponent,
          LoginComponent,
          RegistroComponent,
          UsuariosComponent,
          ProductosComponent,
          ClientesComponent,
          RegistroClientesComponent,
          RegistroProductosComponent,
          RegistroUsuariosComponent,
  ],
  imports: [
    CommonModule,
    TienditaRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InicioComponent,
    CategoriasComponent,
    CarritoComponent
  ]
})
export class TienditaModule { }

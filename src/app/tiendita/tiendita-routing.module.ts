import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DulceriaComponent } from './pages/dulceria/dulceria.component';
import { LimpiezaComponent } from './pages/limpieza/limpieza.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { RegistroClientesComponent } from './pages/registro-clientes/registro-clientes.component';
import { RegistroProductosComponent } from './pages/registro-productos/registro-productos.component';
import { RegistroUsuariosComponent } from './pages/registro-usuarios/registro-usuarios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'dulceria', component: DulceriaComponent },
  { path: 'limpieza', component: LimpiezaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'registro-clientes', component: RegistroClientesComponent},
  { path: 'registro-productos', component: RegistroProductosComponent},
  { path: 'registro-usuarios', component: RegistroUsuariosComponent},






  





  { path: '**', redirectTo: 'inicio' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TienditaRoutingModule { }

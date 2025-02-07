import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../auth/pages/layout-page/layout-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'carrito', component: CarritoComponent }, 
      { path: '**', redirectTo: 'inicio' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TienditaRoutingModule { }

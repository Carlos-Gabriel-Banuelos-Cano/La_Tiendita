import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LimpiezaComponent } from './pages/limpieza/limpieza.component';
import { DulceriaComponent } from './pages/dulceria/dulceria.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'limpieza', component: LimpiezaComponent },
  { path: 'dulceria', component: DulceriaComponent },
  { path: '**', redirectTo: 'inicio' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TienditaRoutingModule { }

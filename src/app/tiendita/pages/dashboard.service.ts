import { Injectable } from '@angular/core';
import { ClienteService } from './cliente.service'; 
import { ProductoService } from './producto.service';
import { UsuarioService } from './usuario.service'; 

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private usuarioService: UsuarioService
  ) {}

  obtenerConteos() {
    return {
      empleados: this.clienteService.obtenerClientes().length,
      productos: this.productoService.obtenerProductos().length,
      usuarios: this.usuarioService.getUsuarios().length
    };
  }
}

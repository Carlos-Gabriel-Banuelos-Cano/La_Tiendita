import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.clientes = this.clienteService.obtenerClientes();
  }

  editarCliente(index: number) {
    this.router.navigate(['/tiendita/registro-clientes'], { queryParams: { editar: index } });
  }

  eliminarCliente(index: number) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(index);
      this.clientes = this.clienteService.obtenerClientes(); // Recargar la lista de clientes
    }
  }
}

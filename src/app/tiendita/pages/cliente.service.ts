import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: any[] = [];

  constructor() {
    this.cargarClientes();
  }

  cargarClientes() {
    const clientesGuardados = localStorage.getItem('clientes');
    if (clientesGuardados) {
      this.clientes = JSON.parse(clientesGuardados);
    }
  }

  guardarClientes() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  agregarCliente(cliente: any) {
    this.clientes.push(cliente);
    this.guardarClientes();
  }

  obtenerClientes() {
    return this.clientes;
  }

  editarCliente(index: number, cliente: any) {
    this.clientes[index] = cliente;
    this.guardarClientes();
  }

  eliminarCliente(index: number) {
    this.clientes.splice(index, 1);
    this.guardarClientes();
  }
}

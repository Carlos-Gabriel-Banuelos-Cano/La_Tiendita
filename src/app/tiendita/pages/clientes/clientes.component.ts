import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  clientes: any[] = [];
  clienteEditando: any = null;  // Almacena el cliente en edición
  editIndex: number | null = null; // Índice del cliente que se está editando
  editando: boolean = false; // Controla si hay edición activa

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clientes = this.clienteService.obtenerClientes();
  }

  confirmarEliminacion(index: number) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.eliminarCliente(index);
    }
  }

  eliminarCliente(index: number) {
    this.clienteService.eliminarCliente(index);
    this.clientes = this.clienteService.obtenerClientes();
    alert("Cliente eliminado correctamente.");
  }

  editarCliente(index: number) {
    this.editando = true; // Se bloquean otros botones de edición
    this.editIndex = index;
    this.clienteEditando = { ...this.clientes[index] }; // Copia los datos del cliente
  }

  guardarEdicion() {
    if (this.editIndex !== null) {
      this.clientes[this.editIndex] = { ...this.clienteEditando };
      this.clienteService.editarCliente(this.editIndex, this.clientes[this.editIndex]);
      alert("Cliente actualizado correctamente.");
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.clienteEditando = null;
    this.editIndex = null;
    this.editando = false; // Desbloquea los botones de edición
  }
}

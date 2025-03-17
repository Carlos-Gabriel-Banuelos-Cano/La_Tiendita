import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css'],
  standalone:false
})
export class RegistroClientesComponent implements OnInit {
  cliente = {
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    fecha: '',
    telefono: '',
    nss: ''
  };
  clienteIndex: number | null = null;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const index = params['editar'];
      if (index !== undefined) {
        this.clienteIndex = +index;
        this.cargarClienteParaEditar();
      }
    });
  }

  cargarClienteParaEditar() {
    if (this.clienteIndex !== null) {
      const clientes = this.clienteService.obtenerClientes();
      const cliente = clientes[this.clienteIndex];
      this.cliente = { ...cliente };
    }
  }

  agregarCliente() {
    if (this.clienteIndex === null) {
      this.clienteService.agregarCliente(this.cliente);
    } else {
      this.clienteService.editarCliente(this.clienteIndex, this.cliente);
    }
    this.router.navigate(['/clientes']);
  }

  cancelar() {
    this.router.navigate(['/tiendita/clientes']);
  }
}

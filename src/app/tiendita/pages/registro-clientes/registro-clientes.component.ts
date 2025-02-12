import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-registro-clientes',
  standalone: false,
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})
export class RegistroClientesComponent implements OnInit {
  cliente = {
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    correo: ''
  };
  clienteIndex: number | null = null;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Verificar si hay un parámetro 'editar' en la URL
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
      this.cliente = { ...cliente }; // Cargar los datos del cliente en el formulario
    }
  }

  agregarCliente() {
    if (this.clienteIndex === null) {
      this.clienteService.agregarCliente(this.cliente);
    } else {
      this.clienteService.editarCliente(this.clienteIndex, this.cliente);
    }
    this.router.navigate(['/tiendita/clientes']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css'],
  standalone:false
})
export class RegistroProductosComponent implements OnInit {
  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 1
  };
  productoIndex: number | null = null;
  location: any;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const index = params['editar'];
      if (index !== undefined) {
        this.productoIndex = +index;
        this.cargarProductoParaEditar();
      }
    });
  }

  cargarProductoParaEditar() {
    if (this.productoIndex !== null) {
      const productos = this.productoService.obtenerProductos();
      const producto = productos[this.productoIndex];
      this.producto = { ...producto }; // Cargar datos en el formulario
    }
  }

  agregarProducto() {
    if (this.productoIndex === null) {
      this.productoService.agregarProducto(this.producto);
    } else {
      this.productoService.editarProducto(this.productoIndex, this.producto);
    }
    this.router.navigate(['/tiendita/productos']);
  }
  cancelar() {
    this.router.navigate(['/tiendita/productos']); // Redirige a la lista de productos
  }
}

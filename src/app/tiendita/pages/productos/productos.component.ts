import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }

  editarProducto(index: number) {
    this.router.navigate(['/tiendita/registro-productos'], { queryParams: { editar: index } });
  }

  eliminarProducto(index: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(index);
      this.productos = this.productoService.obtenerProductos(); // Recargar la lista de productos
    }
  }
}

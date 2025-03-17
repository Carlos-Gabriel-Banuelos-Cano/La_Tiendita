import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  standalone: false
})
export class ProductosComponent implements OnInit {
  
  productos: any[] = [];
  productoEditando: any = null;  // Almacena el producto en edición
  editIndex: number | null = null; // Índice del producto que se está editando
  editando: boolean = false; // Controla si hay edición activa

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }

  confirmarEliminacion(index: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.eliminarProducto(index);
    }
  }

  eliminarProducto(index: number) {
    this.productoService.eliminarProducto(index);
    this.productos = this.productoService.obtenerProductos();
    alert("Producto eliminado correctamente.");
  }

  editarProducto(index: number) {
    this.editando = true; // Se bloquean otros botones de edición
    this.editIndex = index;
    this.productoEditando = { ...this.productos[index] }; // Copia los datos del producto
  }

  guardarEdicion() {
    if (this.editIndex !== null) {
      this.productos[this.editIndex] = { ...this.productoEditando };
      this.productoService.editarProducto(this.editIndex, this.productos[this.editIndex]);
      alert("Producto actualizado correctamente.");
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.productoEditando = null;
    this.editIndex = null;
    this.editando = false; // Desbloquea los botones de edición
  }
}

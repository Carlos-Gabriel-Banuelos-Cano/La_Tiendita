import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: any[] = [];

  constructor() {
    this.cargarProductos();
  }

  cargarProductos() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

  guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  agregarProducto(producto: any) {
    this.productos.push(producto);
    this.guardarProductos();
  }

  obtenerProductos() {
    return this.productos;
  }

  editarProducto(index: number, producto: any) {
    this.productos[index] = producto;
    this.guardarProductos();
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.guardarProductos();
  }
}

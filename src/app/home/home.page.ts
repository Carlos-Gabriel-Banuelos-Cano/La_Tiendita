import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private router: Router) {}
  productos = [
    { id: 1, nombre: 'Cerveza Victoria', descripcion: 'Cerveza Victoria Mega 1.2L', precio: 45.00, imagen: 'assets/img/vicky.png' },
    { id: 2, nombre: 'Axion', descripcion: 'Jabón para Trastes Axion 1.1L', precio: 67.00, imagen: 'assets/img/axion.png' },
    { id: 3, nombre: 'Frijol Negro', descripcion: 'Frijol Negro La Sierra 1kg', precio: 24.50, imagen: 'assets/img/frijoles.png' },
  ];

  agregarAlCarrito(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito');
  }

  irAAbarrotes() {
    this.router.navigate(['/abarrotes', { categoria: 'abarrotes' }]);
  }
  
  irALimpieza() {
    this.router.navigate(['/abarrotes', { categoria: 'limpieza' }]);
  }
  
  irADulces() {
    this.router.navigate(['/abarrotes', { categoria: 'dulceria' }]);
  }
  
  irABebidas() {
    this.router.navigate(['/abarrotes', { categoria: 'bebidas' }]);
  }
  
irACarrito() {
  this.router.navigate(['/carrito']);
}
}

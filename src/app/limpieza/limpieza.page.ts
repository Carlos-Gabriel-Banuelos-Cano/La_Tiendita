import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.page.html',
  styleUrls: ['./limpieza.page.scss'],
  standalone: false,

})
export class LimpiezaPage implements OnInit {

  productos = [
    { id: 1, nombre: 'Axion', descripcion: 'Jabón para Trastes Axion 1.1L', precio: 67.00, imagen: 'assets/img/axion.png' },
    { id: 2, nombre: 'Cloralex', descripcion: 'Cloralex Blanqueador 950ml', precio: 19.50, imagen: 'assets/img/cloro.png' },
    { id: 3, nombre: 'Fibra Scoth-Brite', descripcion: 'Fibra Scoth-Brite 1Pz', precio: 7.50, imagen: 'assets/img/esponja.png' },
    { id: 4, nombre: 'Suavizante Downy', descripcion: 'Suavizante Downy 800ml', precio: 30.00, imagen: 'assets/img/downy.png'},
    { id: 5, nombre: 'Limpiador Pinol', descripcion: 'Pinol Limpiador Multiusos 2L', precio: 55.00, imagen: 'assets/img/pinol.png'},
    { id: 6, nombre: 'Escoba Lux', descripcion: 'Escoba Lux 1Pz', precio: 47.00, imagen: 'assets/img/escoba.png'},
    { id: 7, nombre: 'Jabón Zote', descripcion: 'Jabón Zote en Barra 200g', precio: 11.00, imagen: 'assets/img/zote.png'},


  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  irACarrito() {
    this.router.navigate(['/carrito']);
  }

  agregarAlCarrito(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: false,

})
export class BebidasPage implements OnInit {
  productos: { id: number; nombre: string; descripcion: string; precio: number; imagen: string;}[] = [];

  constructor(private router: Router) {
    this.inicializar();

  }

  inicializar() {

    this.productos = [
      { id: 1, nombre: 'Boing de Mango', descripcion: 'Boing de Mango 500ml', precio: 15.00, imagen: 'assets/img/boing.png' },
      { id: 2, nombre: 'Monster Energy', descripcion: 'Monster Energy 473ml', precio: 40.00, imagen: 'assets/img/monster.png' },
      { id: 3, nombre: 'Refresco CocaCola', descripcion: 'Refresco CocaCola 750ml', precio: 25.00, imagen: 'assets/img/coca.png' }
    
  
    ];
  }

  buscar(ev: any) {
    this.inicializar();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.productos = this.productos.filter((item) => {
        return item.nombre.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  agregarAlCarrito(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito');
  }

  irACarrito() {
    this.router.navigate(['/carrito']);
  }

  ngOnInit() {}

}

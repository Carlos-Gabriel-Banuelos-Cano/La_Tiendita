import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dulceria',
  templateUrl: './dulceria.page.html',
  styleUrls: ['./dulceria.page.scss'],
  standalone: false,

})
export class DulceriaPage implements OnInit {

  productos: { id: number; nombre: string; descripcion: string; precio: number; imagen: string;}[] = [];

  constructor(private router: Router) {
    this.inicializar();

  }

  inicializar() {

    this.productos = [
      { id: 1, nombre: 'Cheetos Torciditos', descripcion: 'Cheetos Torciditos 240g', precio: 15.00, imagen: 'assets/img/cheetos.png' },
      { id: 2, nombre: 'Doritos Nacho', descripcion: 'Doritos Nacho 146g', precio: 17.00, imagen: 'assets/img/doritos.png' },
      { id: 3, nombre: 'Paleta Payaso', descripcion: 'Paleta Payaso 45g', precio: 20.00, imagen: 'assets/img/payaso.png' },
      { id: 4, nombre: 'Mini Rocko', descripcion: 'Mini Rocko 10g', precio: 5.00, imagen: 'assets/img/rocko.png'},
      { id: 5, nombre: 'Emperador Senzo', descripcion: 'Galletas Emperador Senzo 300g', precio: 15.00, imagen: 'assets/img/senzo.png'}
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

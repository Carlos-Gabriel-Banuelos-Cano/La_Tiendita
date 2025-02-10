import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.page.html',
  styleUrls: ['./abarrotes.page.scss'],
  standalone: false,
})


export class AbarrotesPage implements OnInit {
  productos: { id: number; nombre: string; descripcion: string; precio: number; imagen: string;}[] = [];

  constructor(private router: Router) {
    this.inicializar();

  }

  inicializar() {

    this.productos = [
      { id: 1, nombre: 'Arroz Schettino', descripcion: 'Arroz Schettino Super Extra 900g', precio: 16.00, imagen: 'assets/img/arrox.png' },
      { id: 2, nombre: 'Frijol Negro', descripcion: 'Frijol Negro La Sierra 1kg', precio: 24.50, imagen: 'assets/img/frijoles.png' },
      { id: 3, nombre: 'Aceite Nutrioli', descripcion: 'Aceite comestible 123 1L', precio: 30.00, imagen: 'assets/img/nutrioli.png' },
      { id: 4, nombre: 'Sal La Fina', descripcion: 'Sal La Fina 1kg', precio: 25.00, imagen: 'assets/img/Sal.png'},
      { id: 5, nombre: 'Cereal Cheerios', descripcion: 'Cereal Cheerios 340g', precio: 80.00, imagen: 'assets/img/cereal.png'},
      { id: 6, nombre: 'Azúcar Bueno', descripcion: 'Azúcar Bueno 2Kg', precio: 49.00, imagen: 'assets/img/azucar.png'}
  
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

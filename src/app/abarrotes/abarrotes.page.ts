import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.page.html',
  styleUrls: ['./abarrotes.page.scss'],
  standalone: false,
})
export class AbarrotesPage implements OnInit {
  productos: { id: number; nombre: string; descripcion: string; precio: number; imagen: string; }[] = [];
  todosLosProductos: { id: number; nombre: string; descripcion: string; precio: number; imagen: string; categoria: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.inicializar();
  }

  inicializar() {
    this.todosLosProductos = [
      // Productos de Abarrotes
      { id: 1, nombre: 'Arroz Schettino', descripcion: 'Arroz Schettino Super Extra 900g', precio: 16.00, imagen: 'assets/img/arrox.png',categoria: 'abarrotes' },
      { id: 2, nombre: 'Frijol Negro', descripcion: 'Frijol Negro La Sierra 1kg', precio: 24.50, imagen: 'assets/img/frijoles.png',categoria: 'abarrotes' },
      { id: 3, nombre: 'Aceite Nutrioli', descripcion: 'Aceite comestible 123 1L', precio: 30.00, imagen: 'assets/img/nutrioli.png',categoria: 'abarrotes' },
      { id: 4, nombre: 'Sal La Fina', descripcion: 'Sal La Fina 1kg', precio: 25.00, imagen: 'assets/img/Sal.png',categoria: 'abarrotes'},
      { id: 5, nombre: 'Cereal Cheerios', descripcion: 'Cereal Cheerios 340g', precio: 80.00, imagen: 'assets/img/cereal.png',categoria: 'abarrotes'},
      { id: 6, nombre: 'Azúcar Bueno', descripcion: 'Azúcar Bueno 2Kg', precio: 49.00, imagen: 'assets/img/azucar.png',categoria: 'abarrotes'},
  

      //Limpieza
      { id: 7, nombre: 'Axion', descripcion: 'Jabón para Trastes Axion 1.1L', precio: 67.00, imagen: 'assets/img/axion.png',categoria: 'limpieza' },
      { id: 8, nombre: 'Cloralex', descripcion: 'Cloralex Blanqueador 950ml', precio: 19.50, imagen: 'assets/img/cloro.png',categoria: 'limpieza' },
      { id: 9, nombre: 'Fibra Scoth-Brite', descripcion: 'Fibra Scoth-Brite 1Pz', precio: 7.50, imagen: 'assets/img/esponja.png',categoria: 'limpieza' },
      { id: 10, nombre: 'Suavizante Downy', descripcion: 'Suavizante Downy 800ml', precio: 30.00, imagen: 'assets/img/downy.png',categoria: 'limpieza'},
      { id: 11, nombre: 'Limpiador Pinol', descripcion: 'Pinol Limpiador Multiusos 2L', precio: 55.00, imagen: 'assets/img/pinol.png',categoria: 'limpieza'},
      { id: 12, nombre: 'Escoba Lux', descripcion: 'Escoba Lux 1Pz', precio: 47.00, imagen: 'assets/img/escoba.png',categoria: 'limpieza'},
      { id: 13, nombre: 'Jabón Zote', descripcion: 'Jabón Zote en Barra 200g', precio: 11.00, imagen: 'assets/img/zote.png',categoria: 'limpieza'},
      // Productos de Dulcería
      { id: 14, nombre: 'Cheetos Torciditos', descripcion: 'Cheetos Torciditos 240g', precio: 15.00, imagen: 'assets/img/cheetos.png', categoria: 'dulceria' },
      { id: 15, nombre: 'Doritos Nacho', descripcion: 'Doritos Nacho 146g', precio: 17.00, imagen: 'assets/img/doritos.png', categoria: 'dulceria' },
      { id: 16, nombre: 'Paleta Payaso', descripcion: 'Paleta Payaso 45g', precio: 20.00, imagen: 'assets/img/payaso.png', categoria: 'dulceria' },
      { id: 17, nombre: 'Mini Rocko', descripcion: 'Mini Rocko 10g', precio: 5.00, imagen: 'assets/img/rocko.png', categoria: 'dulceria' },
      { id: 18, nombre: 'Emperador Senzo', descripcion: 'Galletas Emperador Senzo 300g', precio: 15.00, imagen: 'assets/img/senzo.png', categoria: 'dulceria' },
      //Productos de bebidas
      { id: 1, nombre: 'Boing de Mango', descripcion: 'Boing de Mango 500ml', precio: 15.00, imagen: 'assets/img/boing.png', categoria: 'bebidas' },
      { id: 2, nombre: 'Monster Energy', descripcion: 'Monster Energy 473ml', precio: 40.00, imagen: 'assets/img/monster.png', categoria: 'bebidas' },
      { id: 3, nombre: 'Refresco CocaCola', descripcion: 'Refresco CocaCola 750ml', precio: 25.00, imagen: 'assets/img/coca.png', categoria: 'bebidas' }
    
    ];

    // Mostrar todos los productos al inicio
    this.productos = [...this.todosLosProductos];
  }

  filtrarPorCategoria(categoria: string) {
    if (categoria === 'Todos') {
      this.productos = [...this.todosLosProductos];
    } else {
      this.productos = this.todosLosProductos.filter(p => p.categoria === categoria);
    }
  }

  buscar(ev: any) {
    const val = ev.target.value.toLowerCase();
    this.productos = this.todosLosProductos.filter(p => p.nombre.toLowerCase().includes(val));
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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('categoria');
      if (categoria) {
        this.filtrarPorCategoria(categoria);
      }
    });
  }
}

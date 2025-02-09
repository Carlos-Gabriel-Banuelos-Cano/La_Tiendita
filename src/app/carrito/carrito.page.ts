import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  standalone: false,
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  carrito: any[] = [];
  total: number = 0;

  constructor() {}

  ionViewWillEnter() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter(item => item.id !== producto.id);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.calcularTotal();
  }

  vaciarCarrito() {
    this.carrito = [];
    localStorage.setItem('carrito', JSON.stringify([]));
    this.total = 0;
  }

  totalCarrito(): number {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

    generarPDF() {
      const doc = new jsPDF();
      let yPosition = 20;
  
      doc.setFontSize(20);
      doc.text("Factura de Compra", 10, yPosition);
      yPosition += 10;
  
      doc.setFontSize(12);
      this.carrito.forEach((producto, index) => {
        doc.text(`${index + 1}. ${producto.nombre} - $${producto.precio}`, 10, yPosition);
        yPosition += 8;
      });
  
      doc.text(`Total: $${this.totalCarrito()}`, 10, yPosition);
  
      doc.save('compra.pdf');
        this.vaciarCarrito();
    }
  }

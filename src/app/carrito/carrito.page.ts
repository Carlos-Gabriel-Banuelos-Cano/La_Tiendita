import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import html2canvas from 'html2canvas';

@Component({
  standalone: false,
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  carrito: any[] = [];
  total: number = 0;

  constructor(private toastController: ToastController) {}

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
    const index = this.carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
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

  async generarPNG() {
    if (this.carrito.length === 0) {
      this.mostrarToast("El carrito está vacío. Agrega productos antes de comprar.");
      return;
    }

    const element = document.getElementById('carrito-content');
    if (!element) {
      this.mostrarToast("No se encontró el contenido del carrito.");
      return;
    }

    // Usamos html2canvas para capturar el contenido
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    // Crear un enlace de descarga compatible con dispositivos móviles
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'compra.png'; // El nombre del archivo PNG

    // Intentar descargar en dispositivos móviles
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
      const blob = this.dataURLtoBlob(imgData);
      const file = new Blob([blob], { type: 'image/png' });
      const url = window.URL.createObjectURL(file);
      const mobileLink = document.createElement('a');
      mobileLink.href = url;
      mobileLink.download = 'compra.png';
      mobileLink.click();
      window.URL.revokeObjectURL(url); // Liberar el URL después de la descarga
    } else {
      // Para desktop, solo usar el enlace tradicional
      link.click();
    }

    this.vaciarCarrito();
  }

  // Convertir Data URL a Blob
  dataURLtoBlob(dataURL: string): Blob {
    const byteString = atob(dataURL.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([uintArray], { type: 'image/png' });
  }

  guardarPedido() {
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    const nuevoPedido = {
      id: new Date().getTime(),
      productos: [...this.carrito],
      total: this.totalCarrito(),
      fecha: new Date().toLocaleString()
    };
    pedidos.push(nuevoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'warning'
    });
    await toast.present();
  }
}

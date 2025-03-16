import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: false
})
export class PedidosPage {
  pedidos: any[] = [];

  constructor(private toastController: ToastController) {}

  ionViewWillEnter() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
  }

  cancelarPedido(index: number) {
    this.pedidos.splice(index, 1); // 🗑 Eliminar el pedido de la lista
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos)); // 📦 Actualizar localStorage
    this.mostrarToast("Pedido cancelado correctamente."); // 🔔 Mensaje de confirmación
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  editando: boolean = false;
  nombre: string = 'Kurt Cobain';
  correo: string = 'banu.@gmail.com';
  fotoPerfil: string = ''; 

  errorNombre: boolean = false;
  errorCorreo: boolean = false;
  formValido: boolean = true;

  constructor(
    private router: Router,
    private alertController: AlertController) {}

  ngOnInit() {}

  tomarFoto() {
    Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, 
      quality: 100
    }).then((foto) => {
      this.fotoPerfil = foto.webPath ?? '';
        }).catch((error) => {
      console.error('Error al seleccionar la foto: ', error);
    });
  }

  CerrarSesion() {
    this.router.navigate(['/login']);
  }

  async mostrarMensajeCupones() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Usted no cuenta con cupones actualmente.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  toggleEditar() {
    if (this.editando) {
      if (this.formValido) {
        console.log('Datos guardados:', this.nombre, this.correo);
      }
    }
    this.editando = !this.editando;
  }

  validarFormulario() {
    this.errorNombre = this.nombre.trim().length === 0;
    this.errorCorreo = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
    this.formValido = !this.errorNombre && !this.errorCorreo;
  }

  guardarCambios() {
    if (this.formValido) {
      console.log('Datos guardados:', this.nombre, this.correo);
      this.editando = false;
    }
  }

  irATarjeta() {
    this.router.navigate(['/tarjeta']);
  }

  irAPedidos() {
    this.router.navigate(['/pedidos']);
  }

  irAComen() {
    this.router.navigate(['/comentarios']);
  }
  

}

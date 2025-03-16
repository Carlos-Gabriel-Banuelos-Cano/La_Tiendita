import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
  standalone: false,
})
export class ComentariosPage {
  comentarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
    this.comentarioForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      comentario: ['', Validators.required],
    });
  }

  correoInvalido(): boolean {
    return (
      this.comentarioForm.controls['correo'].invalid &&
      this.comentarioForm.controls['correo'].touched
    );
  }

  telefonoInvalido(): boolean {
    return (
      this.comentarioForm.controls['telefono'].invalid &&
      this.comentarioForm.controls['telefono'].touched
    );
  }

  async enviarComentario() {
    if (this.comentarioForm.valid) {
      this.mostrarToast('Comentario enviado correctamente.');
      this.comentarioForm.reset(); // Limpiar el formulario
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }
}

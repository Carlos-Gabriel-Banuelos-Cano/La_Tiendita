import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
  standalone: false
})
export class RegistroUsuariosComponent implements OnInit {

  nombreUsuario: string = '';
  correo1: string = '';
  contrasena1: string = '';
  usuarioIndex: number | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['editar']) {
        this.usuarioIndex = Number(params['editar']);
        const usuarios = this.usuarioService.getUsuarios();
        if (this.usuarioIndex !== null && this.usuarioIndex >= 0 && this.usuarioIndex < usuarios.length) {
          const usuario = usuarios[this.usuarioIndex];
          if (usuario) {
            this.nombreUsuario = usuario.nombreUsuario;
            this.correo1 = usuario.correo;
            this.contrasena1 = usuario.contrasena1;
          }
        }
      }
    });
  }
  

  agregarOEditarUsuario(form: NgForm) {
    if (form.invalid) { // Si el formulario es inválido, no se procesa
        alert("Por favor, complete los campos correctamente.");
        return;
    }

    // Validación extra para prevenir datos vacíos o incorrectos
    if (!this.nombreUsuario || !this.correo1 || !this.contrasena1) {
        alert("No se permiten campos vacíos.");
        return;
    }

    // Creando el objeto de usuario
    const nuevoUsuario = {
        nombreUsuario: this.nombreUsuario.trim(),
        correo: this.correo1.trim(),
        contrasena1: this.contrasena1.trim()
    };

    if (this.usuarioIndex !== null) {
        this.usuarioService.actualizarUsuario(this.usuarioIndex, nuevoUsuario);
    } else {
        this.usuarioService.guardarUsuario(nuevoUsuario);
    }

    this.router.navigate(['/tiendita/usuarios']);
}

}
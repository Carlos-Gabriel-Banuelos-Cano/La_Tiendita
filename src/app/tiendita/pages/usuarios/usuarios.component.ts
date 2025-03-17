import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  standalone: false
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];
  usuarioEditando: any = null;  // Almacena el usuario en edición
  editIndex: number | null = null; // Índice del usuario que se está editando
  editando: boolean = false; // Nueva variable para controlar el estado de edición

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  confirmarEliminacion(index: number) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirmacion) {
      this.eliminarUsuario(index);
    }
  }

  eliminarUsuario(index: number) {
    this.usuarioService.eliminarUsuario(index);
    this.usuarios = this.usuarioService.getUsuarios();
    alert("Usuario eliminado correctamente.");
  }

  editarUsuario(index: number) {
    this.editando = true; // Establece que estamos editando
    this.editIndex = index;
    this.usuarioEditando = { ...this.usuarios[index] }; // Copia los datos del usuario
  }

  guardarEdicion() {
    if (this.editIndex !== null) {
      this.usuarios[this.editIndex] = { ...this.usuarioEditando };
      this.usuarioService.actualizarUsuario(this.editIndex, this.usuarios[this.editIndex]);
      alert("Usuario actualizado correctamente.");
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.usuarioEditando = null;
    this.editIndex = null;
    this.editando = false; // Termina la edición
  }
}

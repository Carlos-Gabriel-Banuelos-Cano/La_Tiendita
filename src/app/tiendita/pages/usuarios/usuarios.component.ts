import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  standalone:false
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  eliminarUsuario(index: number) {
    this.usuarioService.eliminarUsuario(index);
    this.usuarios = this.usuarioService.getUsuarios();
  }
}

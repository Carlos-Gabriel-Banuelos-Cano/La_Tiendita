import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly storageKey = 'usuarios';

  constructor() { }

  getUsuarios(): any[] {
    const usuarios = localStorage.getItem(this.storageKey);
    return usuarios ? JSON.parse(usuarios) : [];
  }

  guardarUsuario(usuario: any): void {
    const usuarios = this.getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }

  eliminarUsuario(index: number): void {
    const usuarios = this.getUsuarios();
    usuarios.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }

  actualizarUsuario(index: number, usuario: any): void {
    const usuarios = this.getUsuarios();
    usuarios[index] = usuario;
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }
}

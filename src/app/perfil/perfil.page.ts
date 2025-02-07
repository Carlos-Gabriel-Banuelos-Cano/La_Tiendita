import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,

})
export class PerfilPage implements OnInit {

constructor(private router: Router) {}
CerrarSesion() {
  this.router.navigate(['/login']);
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  nombre: String ='';
  email: String ='';
  tel: String ='';
  pass: String ='';
  conpass: String ='';




  constructor(public fb: FormBuilder, 
    public alertController: AlertController,
  private router: Router,
private navController: NavController) { 
    this.formularioRegistro = this.fb.group({
      'NombreUsuario': new FormControl("", Validators.required),
      'ApellidoP': new FormControl("",Validators.required),
      'telefono': ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      'Correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required), //16
      'ConfirmacionPassword': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  async guardar(){
    //var f = this.fomularioRegistro.value;
    }
     
    register(form: NgForm){
      if(form.valid){
        this.navController.navigateBack('/login');
      }
    }
  }



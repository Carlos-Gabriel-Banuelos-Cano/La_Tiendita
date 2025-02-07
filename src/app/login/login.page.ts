import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String='';
  password: String=''

  constructor( 
    private navController: NavController,
    private toastController: ToastController,) { 

  }

  ngOnInit() {
  }

  login(){
    if(this.email =='banu@gmail.com'&& this.password == '1234' )
      {
        this.navController.navigateRoot('/home');

      }
      else{
        this.presentToast();
      }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Las credenciales de acceso son incorrectas',
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  login2(form: NgForm){
        if(form.valid){
          this.navController.navigateBack('/login');
        }
      }

}

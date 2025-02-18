  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
  import { LoginpageComponent } from './pages/loginpage/loginpage.component';
  import { RegisterPageComponent } from './pages/register-page/register-page.component';

  const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent, // Asegura que este es el contenedor
      children: [
        { path: 'login', component: LoginpageComponent },
        { path: 'register', component: RegisterPageComponent },
        { path: '**', redirectTo: 'login' }
      ]
    }
  ];
  
  

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }

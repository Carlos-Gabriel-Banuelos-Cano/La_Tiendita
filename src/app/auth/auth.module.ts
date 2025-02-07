import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginpageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutPageComponent,
    LoginpageComponent,
    RegisterPageComponent
  ]
})
export class AuthModule { }

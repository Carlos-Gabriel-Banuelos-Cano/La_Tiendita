import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { BannerComponent } from './pages/banner/banner.component';
import { BarraComponent } from './pages/barra/barra.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BannerComponent,
    BarraComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

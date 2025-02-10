import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  images = [
    { src: 'assets/img/promo-viky.png', alt: 'Arroz' },
    { src: 'assets/img/promo-limpieza.png', alt: 'Azúcar' },
    { src: 'assets/img/promo-dulces.png', alt: 'Downy' }
  ];
  
}

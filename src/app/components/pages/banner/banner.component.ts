import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  index: number = 0;

  ngOnInit(): void {
    setInterval(() => this.moveSlide(1), 5000);
  }

  moveSlide(step: number) {
    const slides = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
    this.index = (this.index + step + slides.length) % slides.length;
    const container = document.querySelector(".carousel-container") as HTMLElement;
    if (container) {
      container.style.transform = `translateX(-${this.index * 100}%)`;
    }
  }}

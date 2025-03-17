import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  conteos = { empleados: 0, productos: 0, usuarios: 0 };

  // Datos de la gráfica
  chartData: ChartData<'bar'> = {
    labels: ['Empleados', 'Productos', 'Usuarios'],
    datasets: [
      {
        label: 'Registros',
        data: [0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.actualizarConteos();
  }

  actualizarConteos() {
    this.conteos = this.dashboardService.obtenerConteos();
    this.chartData.datasets[0].data = [
      this.conteos.empleados,
      this.conteos.productos,
      this.conteos.usuarios
    ];
  }
}

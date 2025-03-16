import { Component, AfterViewInit } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.page.html',
  styleUrls: ['./tarjeta.page.scss'],
  standalone: false,
})
export class TarjetaPage implements AfterViewInit {
  async ngAfterViewInit() {
    try {
      // Cargar el script de PayPal
      const paypal = await loadScript({
        clientId: "AaShhLoFnF71v6mrWwVEANAw_cXAdJL7crlHeG3GzRQU7u00hviAJ054UDorhxVxfbEs5QsD5hCNxXsu",  // Reemplaza con tu Client ID de PayPal
        components: "buttons",            // Habilita el componente de botones
        enableFunding: "card"            // Habilita tarjetas BBVA, Mastercard, etc.
      });

      // Verificar si PayPal y paypal.Buttons están disponibles
      if (paypal && paypal.Buttons) {
        paypal.Buttons({
          style: {
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "pay",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",  // Se agrega el campo intent con el valor "CAPTURE"
              purchase_units: [{
                amount: {
                  currency_code: "USD",  // Añadir la moneda (USD por ejemplo)
                  value: "10.00"  // Monto del pago
                }
              }]
            });
          },
          onApprove: async (data, actions) => {
            if (actions.order) {
              const order = await actions.order.capture();
              console.log("Pago exitoso:", order);
            } else {
              console.error("No se pudo encontrar la orden para capturar");
            }
          },
          onError: err => {
            console.error("Error en el pago:", err);
          }
        }).render("#paypal-button-container");  // Renderiza el botón de PayPal
      } else {
        console.error("No se pudo cargar PayPal");
      }
    } catch (error) {
      console.error("Error al cargar PayPal:", error);
    }
  }
}

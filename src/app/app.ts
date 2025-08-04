import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [InvoiceComponent,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'py2_App_facturacion_v1';
}

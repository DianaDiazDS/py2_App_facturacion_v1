import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../models/invoice';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice',
  imports: [CommonModule],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit{
  // OnInit es un ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado.
  //esta clase InvoiceComponent es un componente de Angular que se encarga de mostrar los detalles de una factura.
  // La propiedad invoice es de tipo Invoice y se inicializa a través del servicio InvoiceService
  invoice!: Invoice
  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}

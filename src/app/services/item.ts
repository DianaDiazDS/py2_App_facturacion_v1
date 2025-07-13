import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import {invoiceData} from '../data/invoice.data'

@Injectable({
  providedIn: 'root'
})
export class Item {
 private invoice: Invoice = invoiceData;
 constructor(){

 } 

 getInvoice(): Invoice {
    return this.invoice;
  }
 }

// Esta clase define un servicio Angular llamado Item. Aquí tienes un
//  desglose de lo que hace:

// Decorador @Injectable({ providedIn: 'root' }): Indica que esta
//  clase es un servicio que puede ser inyectado en otros componentes o servicios de Angular. Al usar providedIn: 'root', Angular crea una única instancia de este servicio para toda la aplicación (singleton).

// Propiedad privada invoice: Guarda un objeto de tipo Invoice, 
// inicializado con el valor de invoiceData. Esto significa que el 
// servicio almacena información de una factura.

// Constructor vacío: No realiza ninguna acción especial al crear 
// la instancia del servicio.

// Método getInvoice(): Permite acceder a la factura almacenada en 
// la propiedad privada invoice.

// Resumen
// Esta clase sirve como un servicio para acceder (y posiblemente 
// manejar, si agregas más métodos) una factura (Invoice) en tu 
// aplicación Angular. Otros componentes pueden inyectar este servicio 
// para obtener la factura mediante el método getInvoice().

// Nota: Para que funcione correctamente, debes asegurarte de que 
// Invoice e invoiceData estén definidos e importados en este archivo.


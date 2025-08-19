import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.html'
})
export class InvoiceView {
  @Input() id!: number;
  @Input() name!: string;


}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.html'
})
export class ClientView {
 @Input() name!: string;
 @Input() lastname!: string; 
 @Input() correo!: string;
 @Input() phone!: string;

 @Input() number!: string;
 @Input() steet!: string;
 @Input() city!: string;
 @Input() country!: string;
}

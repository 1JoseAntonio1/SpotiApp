import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
 
})
export class TarjetasComponent {

  constructor() { }

  ngOnInit() {
  }

  @Input() items:any[] = [];
}

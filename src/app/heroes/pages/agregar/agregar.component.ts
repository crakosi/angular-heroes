import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  publishers= [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Mavel Comics',
      desc: 'Marvel -  Comics'
    }
  ]
}

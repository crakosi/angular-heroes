import { Component } from '@angular/core';
import { HeroeResponse } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = '';
  heroes: HeroeResponse[] = [];
  heroeSeleccionado!: HeroeResponse | undefined;
  constructor( private heroesService: HeroesService){

  }

  buscando(){
    this.heroesService.getSugerencias( this.termino ).subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada( event:MatAutocompleteActivatedEvent ){
    if( event.option?.value ){
      const heroe: HeroeResponse = event.option?.value;
      this.termino = heroe.superhero;

      this.heroesService.getHeroeByID( heroe.id! ).subscribe( resp => this.heroeSeleccionado = resp)
    }else{
      this.heroeSeleccionado = undefined;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeResponse } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [ ]
})
export class ListadoComponent implements OnInit {

  heroes: HeroeResponse[] = [];

  constructor( private heroesService: HeroesService ){ }

  ngOnInit(): void {
    this.heroesService.getHerores().subscribe( resp => this.heroes = resp );
  }
}

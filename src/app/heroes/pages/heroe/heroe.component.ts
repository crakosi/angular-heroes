import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeResponse } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [ `
    img{
      width:100%;
      border-radius:5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: HeroeResponse;
  constructor( private activatedRouter: ActivatedRoute, private heoreService: HeroesService, private router: Router ){ }

  ngOnInit(): void {
    // this.activatedRouter.params.subscribe(({ id }) =>{
    //  this.heoreService.getHeroeByID( id ).subscribe( heroe => this.heroe = heroe);

    // });
    this.activatedRouter.params.pipe(
      switchMap( ({ id }) => this.heoreService.getHeroeByID(id) )
    ).subscribe( heroe => this.heroe = heroe );
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}

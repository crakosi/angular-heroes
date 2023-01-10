import { Component, OnInit } from '@angular/core';
import { HeroeResponse, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100;
        border-radius: 5px;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {


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

  heroe: HeroeResponse={
    superhero: '',
    alter_ego:'',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor( private heroesService: HeroesService, 
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog ){ }

  ngOnInit(): void {

    if( this.router.url.includes('editar')){
      this.activateRoute.params
   .pipe( 
    switchMap(({id}) => this.heroesService.getHeroeByID( id ) )
   )
   .subscribe(
    heroe => this.heroe = heroe
    )
    }
  }

  guardar(): void {
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }
    if ( this.heroe.id ){
      //Actualizar
      this.heroesService.actualizarHeore( this.heroe ).subscribe(
        resp => { this.mostratSnackBar( 'Registro actualizado' ) }
      )
    } else {
      //Agregar
      this.heroesService.agregarHeore( this.heroe ).subscribe(
        heroe =>  { 
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostratSnackBar( 'Registro creado' );
        }
      )
    }
    
  }

  eliminarHeroe(){
    const dialog =  this.dialog.open( ConfirmarComponent ,{ 
      width: '250px', 
      data: { ...this.heroe }
     });

     dialog.afterClosed().subscribe( 
      (result) => {
        if( result ){
          this.heroesService.eliminarHeore( this.heroe.id! )
          .subscribe(resp => {
            this.router.navigate(['/heroes']);
          });
        }
      });
     

  }
  
  
  mostratSnackBar( mensaje: string): void {
    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });
  }




}

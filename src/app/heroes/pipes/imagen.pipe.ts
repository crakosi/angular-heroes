import { Pipe, PipeTransform } from '@angular/core';
import { HeroeResponse } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: HeroeResponse ): string {
    console.log(heroe)
    if( !heroe.id || !heroe.alt_img ){
      return 'assets/no-image.png';
    } else if ( heroe.alt_img ){
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}

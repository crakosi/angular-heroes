import { Pipe, PipeTransform } from '@angular/core';
import { HeroeResponse } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: HeroeResponse ): string {

    return `assets/heroes/${heroe.id}.jpg`;
  }

}

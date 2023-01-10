import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroeResponse } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogoRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroeResponse){ }

  ngOnInit(): void {
    console.log(this.data);
    
  }


  borrar(){
    this.dialogoRef.close(true);
  }

  cerrar (){
    this.dialogoRef.close();
  }
}

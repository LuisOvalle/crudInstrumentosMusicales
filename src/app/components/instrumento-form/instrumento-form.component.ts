import { Component, OnInit } from '@angular/core';

import { InstrumentoService} from '../../services/instrumento.service'

@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css']
})
export class InstrumentoFormComponent implements OnInit {

  constructor(
    public instrumentoServicio: InstrumentoService
  ) { }

  ngOnInit() {
  }

  addInstrumento(nuevoNombre: HTMLInputElement, nuevaMarca: HTMLInputElement, nuevoColor: HTMLInputElement, 
  nuevoPrecio: HTMLInputElement, nuevaDescripcion: HTMLInputElement){
    console.log('Agregando Instrumento: ', nuevoNombre.value, nuevaMarca.value, nuevoColor.value, nuevoPrecio.value, nuevaDescripcion.value)
    //cancelar la recarga de la pagina, porque es dentro del mismo servidor
    this.instrumentoServicio.addInstrumento({
      nombre: nuevoNombre.value,
      marca: nuevaMarca.value,
      color: nuevoColor.value,
      precio: nuevoPrecio.value,
      descripcion: nuevaDescripcion.value
    });
    nuevoNombre.value ='';
    nuevaMarca.value='';
    nuevoColor.value='';
    nuevoPrecio.value='';
    nuevaDescripcion.value='';
    nuevoNombre.focus();
    return false;
  }
}

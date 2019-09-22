import { Injectable } from '@angular/core';

import { Instrumento } from '../models/Instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentos: Instrumento[];
  constructor() { 
    this.instrumentos =[
      {nombre: 'Piano', marca: 'Yamaha', color: 'Negro', precio: 10000, descripcion: 'Piano clasico eléctrico P-45'},
      {nombre: 'Guitarra Electrica', marca: 'Fender', color: 'Azul', precio: 2000, descripcion: 'Guitarra electro acustica  FA-125CE'}
    ];
  }

  getInstrumentos(){
    return this.instrumentos;
  }

  addInstrumento(pInstrumento){
    this.instrumentos.push(pInstrumento);
  }
}

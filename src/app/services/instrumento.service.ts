import { Injectable } from '@angular/core';

import { Instrumento } from '../models/Instrumento';
import { InstrumentoListComponent } from '../components/instrumento-list/instrumento-list.component';
import { toASCII } from 'punycode';
import { JsonPipe } from '@angular/common';
import { TagContentType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentos: Instrumento[];
  constructor() { 
    this.instrumentos =[
      //{nombre: 'Piano', marca: 'Yamaha', clasificacion: 'Negro', precio: 10000, descripcion: 'Piano clasico eléctrico P-45'},
      //{nombre: 'Guitarra Electrica', marca: 'Fender', clasificacion: 'Azul', precio: 2000, descripcion: 'Guitarra electro acustica  FA-125CE'}
    ];

  }

  getInstrumentos(){
    if(localStorage.getItem('instrumentos')===null){
      return this.instrumentos;
    }else{
      this.instrumentos = JSON.parse(localStorage.getItem('instrumentos'))
      return this.instrumentos;
    }
  }

  addInstrumento(pInstrumento){
    this.instrumentos.unshift(pInstrumento);
    let instrumentos: Instrumento[] = [];
    if(localStorage.getItem('instrumentos') === null){
      instrumentos.unshift(pInstrumento);
      localStorage.setItem('instrumentos', JSON.stringify(instrumentos));
    }else{
      instrumentos = JSON.parse(localStorage.getItem('instrumentos'));
      instrumentos.unshift(pInstrumento);
      localStorage.setItem('instrumentos', JSON.stringify(instrumentos));
    }
  }

  deleteInstrumento(pInstrumento: Instrumento){
    for (let i = 0; i < this.instrumentos.length; i++) {
      if(pInstrumento == this.instrumentos[i]) {
        this.instrumentos.splice(i,1);
        localStorage.setItem('instrumentos', JSON.stringify(this.instrumentos));
      }
    }
  }
}

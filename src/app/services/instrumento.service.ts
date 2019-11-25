import { Injectable } from '@angular/core';

import { Instrumento } from '../models/Instrumento';
import { InstrumentoListComponent } from '../components/instrumento-list/instrumento-list.component';
import { toASCII } from 'punycode';
import { JsonPipe } from '@angular/common';
import { TagContentType } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {
  urlAConectar:string = environment.url;
  readonly URLAConsumir = this.urlAConectar;

  instrumentos: Instrumento[];
  constructor(private http: HttpClient) { 
    this.instrumentos =[
      //{nombre: 'Piano', marca: 'Yamaha', clasificacion: 'Negro', precio: 10000, descripcion: 'Piano clasico eléctrico P-45'},
      //{nombre: 'Guitarra Electrica', marca: 'Fender', clasificacion: 'Azul', precio: 2000, descripcion: 'Guitarra electro acustica  FA-125CE'}
    ];
  }

  getInstrumentos(){
    /*if(localStorage.getItem('instrumentos')===null){
      return this.instrumentos;
    }else{
      this.instrumentos = JSON.parse(localStorage.getItem('instrumentos'))
      return this.instrumentos;
    }*/
    console.log('URL A CONSUMIR: '+ this.urlAConectar)
    return this.http.get(this.URLAConsumir);
  }

  getInstrumento(i: number){
    //return this.instrumentos[i];
    console.log(this.URLAConsumir+ '/'+ i)
    return this.http.get(this.URLAConsumir + '/'+ i);
  }

  addInstrumento(pInstrumento){
    /*
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
    */
    return this.http.post(this.URLAConsumir, pInstrumento);
  }

  deleteInstrumento(pInstrumento: Instrumento){
    /*for (let i = 0; i < this.instrumentos.length; i++) {
      if(pInstrumento == this.instrumentos[i]) {
        this.instrumentos.splice(i,1);
        localStorage.setItem('instrumentos', JSON.stringify(this.instrumentos));
      }
    }*/
    return this.http.delete(this.URLAConsumir + '/'+ pInstrumento.id);
  }

  updateInstrumento(pInstrumento: Instrumento, id: number){
    /*this.instrumentos.splice(id,1);
    localStorage.setItem('instrumentos', JSON.stringify(this.instrumentos));
    this.addInstrumento(pInstrumento);*/

    delete pInstrumento.id;
    return this.http.put(this.URLAConsumir + '/'+ id , pInstrumento);
  }
}

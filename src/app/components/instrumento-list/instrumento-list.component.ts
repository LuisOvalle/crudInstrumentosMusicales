import { Component, OnInit } from '@angular/core';

import { InstrumentoService } from '../../services/instrumento.service'
import { Instrumento } from '../../models/Instrumento'

@Component({
  selector: 'app-instrumento-list',
  templateUrl: './instrumento-list.component.html',
  styleUrls: ['./instrumento-list.component.css']
})
export class InstrumentoListComponent implements OnInit {

  instrumentos: Instrumento[];
  
  actualizarInstrumentos() {
    this.instrumentoServicio.getInstrumentos().subscribe((res) => {
      this.instrumentos = res as Instrumento[];
    });
  }

  constructor(
    public instrumentoServicio: InstrumentoService
  ) { }

  ngOnInit() {
    //this.instrumentos = this.instrumentoServicio.getInstrumentos();
    this.actualizarInstrumentos();
  }

}

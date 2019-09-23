import { Component, OnInit, Input } from '@angular/core';
import { Instrumento } from 'src/app/models/Instrumento';
import { InstrumentoListComponent } from '../instrumento-list/instrumento-list.component';
import { InstrumentoService } from '../../services/instrumento.service';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  @Input() instrumento: Instrumento;

  constructor(
    public instrumentoServicio: InstrumentoService
  ) { }

  ngOnInit() {
  }

  deleteInstrumento(instrumento: Instrumento){
    if(confirm('¿Desea eliminar este instrumento?')){
      this.instrumentoServicio.deleteInstrumento(instrumento);
    }
  }
}

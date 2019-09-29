import { Component, OnInit } from '@angular/core';
import { InstrumentoService} from '../../services/instrumento.service'
import { Instrumento } from '../../models/Instrumento';
import { Router } from '@angular/router'


@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css']
})

export class InstrumentoFormComponent implements OnInit {
  public nuevoInstrumento: Instrumento;

  constructor(
    public instrumentoServicio: InstrumentoService,
    private router:Router
  ) { }

  ngOnInit() {
    this.nuevoInstrumento = new Instrumento();
  }

  addInstrumento(nuevaMarca: HTMLInputElement, nuevaClasificacion: HTMLInputElement, 
  nuevoPrecio: HTMLInputElement, nuevaDescripcion: HTMLInputElement){
    //cancelar la recarga de la pagina, porque es dentro del mismo servidor
    this.instrumentoServicio.addInstrumento(this.nuevoInstrumento);
    this.router.navigate(['/instrumentos']);
    //nuevoNombre.focus();
    //return false;
  }
}

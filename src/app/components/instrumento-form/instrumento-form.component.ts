import { Component, OnInit } from '@angular/core';
import { InstrumentoService} from '../../services/instrumento.service'
import { Instrumento } from '../../models/Instrumento';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css']
})

export class InstrumentoFormComponent implements OnInit {
  public nuevoInstrumento: Instrumento;
  public editar: boolean = false;
  parametros;

  constructor(
    public instrumentoServicio: InstrumentoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.parametros = this.activatedRoute.snapshot.params;
    if(this.parametros.id){
      this.nuevoInstrumento = this.instrumentoServicio.getInstrumento(this.parametros.id);
      this.editar = true;
      console.log(this.editar);
    } else {
      this.nuevoInstrumento = new Instrumento();
    }
  }

  addInstrumento(){
    this.instrumentoServicio.addInstrumento(this.nuevoInstrumento);
    this.router.navigate(['/instrumentos']);
  }

  updateInstrumento(){
    this.instrumentoServicio.updateInstrumento(this.nuevoInstrumento, this.parametros.id);
    this.router.navigate(['/instrumentos']);
  }
}

import { Component, OnInit } from '@angular/core';
import { InstrumentoService} from '../../services/instrumento.service'
import { Instrumento } from '../../models/Instrumento';
import { ActivatedRoute, Router } from '@angular/router'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css']
})

export class InstrumentoFormComponent implements OnInit {
  public nuevoInstrumento: Instrumento;
  public editar: boolean = false;
  parametros;
  mensaje:string
  public mosrarMensaje = false
  public nombreViejo ="";

  constructor(
    public instrumentoServicio: InstrumentoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.parametros = this.activatedRoute.snapshot.params;
    if(this.parametros.id){
      this.nuevoInstrumento = this.instrumentoServicio.getInstrumento(this.parametros.id);
      this.nombreViejo = this.nuevoInstrumento.nombre;
      this.editar = true;
      console.log(this.editar);
    } else {
      this.nuevoInstrumento = new Instrumento();
    }
  }

  addInstrumento(form: NgForm){
    if(form.valid==true){
      this.instrumentoServicio.addInstrumento(this.nuevoInstrumento);
      this.router.navigate(['/instrumentos']);
    } else {
      this.mensaje="Por favor corregir campos."
      this.mosrarMensaje=true;
      setTimeout(()=>{
        this.mosrarMensaje=false
      },5000  );
    }

    
  }

  updateInstrumento(form: NgForm){
    if(form.valid==true){
      if(confirm('¿Desea sobre escribir "' + this.nombreViejo + '"?')){
        this.instrumentoServicio.updateInstrumento(this.nuevoInstrumento, this.parametros.id);
        this.router.navigate(['/instrumentos']);
      }    
    } else {
      this.mensaje="Por favor corregir campos."
      this.mosrarMensaje=true;
      setTimeout(()=>{
        this.mosrarMensaje=false
      },5000  );
    }
    
  }
}

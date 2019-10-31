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
  instrumentos: Instrumento[];
  
  actualizarInstrumentos() {
    this.instrumentoServicio.getInstrumentos().subscribe((res) => {
      this.instrumentos = res as Instrumento[];
    });
  }

  constructor(
    public instrumentoServicio: InstrumentoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.parametros = this.activatedRoute.snapshot.params;
    if(this.parametros.id){
      //this.nuevoInstrumento = this.instrumentoServicio.getInstrumento(this.parametros.id);
      this.getInstrumento();
      /*this.nombreViejo = this.nuevoInstrumento.nombre;
      this.editar = true;
      console.log(this.editar);
      console.log("nuevo instrumento: "+ Object.keys(this.nuevoInstrumento))*/
    } else {
      this.nuevoInstrumento = new Instrumento();
    }
  }

  getInstrumento() {
    this.instrumentoServicio.getInstrumento(this.parametros.id).subscribe((res) => {
      this.instrumentos = res as Instrumento[];
      this.nuevoInstrumento = this.instrumentos[0];
      this.nombreViejo = this.nuevoInstrumento.nombre;
      this.editar = true;
      console.log(this.editar);
      console.log("nuevo instrumento: "+ Object.keys(this.nuevoInstrumento))
    });
  }

  addInstrumento(form: NgForm){
    if(form.valid==true){
      /*this.instrumentoServicio.addInstrumento(this.nuevoInstrumento);
      this.router.navigate(['/instrumentos']);*/
      delete this.nuevoInstrumento.id;
      this.instrumentoServicio.addInstrumento(this.nuevoInstrumento).subscribe((res) => {
        this.router.navigate(['/instrumentos']);
      })
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
        this.instrumentoServicio.updateInstrumento(this.nuevoInstrumento, this.parametros.id).subscribe((res) => {
          this.router.navigate(['/instrumentos']);
        });
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

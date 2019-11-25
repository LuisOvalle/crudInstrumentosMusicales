import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentoFormComponent } from './components/instrumento-form/instrumento-form.component';
import { InstrumentoListComponent } from './components/instrumento-list/instrumento-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/instrumentos', pathMatch :'full'},
  { path: 'agregarInstrumento', component: InstrumentoFormComponent},
  { path: 'instrumentos', component: InstrumentoListComponent},
  { path: 'instrumentos/editar/:id', component: InstrumentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InstrumentoFormComponent, InstrumentoListComponent];

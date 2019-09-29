import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentoFormComponent } from './components/instrumento-form/instrumento-form.component';
import { InstrumentoListComponent } from './components/instrumento-list/instrumento-list.component';

const routes: Routes = [
  { path: 'agregarInstrumento', component: InstrumentoFormComponent},
  { path: 'instrumentos', component: InstrumentoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InstrumentoFormComponent, InstrumentoListComponent];

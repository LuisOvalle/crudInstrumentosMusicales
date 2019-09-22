import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InstrumentoFormComponent } from './components/instrumento-form/instrumento-form.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { InstrumentoListComponent } from './components/instrumento-list/instrumento-list.component';

import { InstrumentoService } from './services/instrumento.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InstrumentoFormComponent,
    InstrumentoComponent,
    InstrumentoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

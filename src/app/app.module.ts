import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
//import { InstrumentoFormComponent } from './components/instrumento-form/instrumento-form.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
//import { InstrumentoListComponent } from './components/instrumento-list/instrumento-list.component';

import { InstrumentoService } from './services/instrumento.service'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    //InstrumentoFormComponent,
    InstrumentoComponent,
    //InstrumentoListComponent
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InstrumentoFormComponent } from './components/instrumento-form/instrumento-form.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { InstrumentoListComponent } from './components/instrumento-list/instrumento-list.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

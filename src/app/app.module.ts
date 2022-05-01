import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
/*importar ReactiveFormsModule   */
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    ContadorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  /*Para trabajar con formularios reactivos necesitamos importar la clase 'ReactiveFormsModule' en nuestro archivo app.module.ts y crear un objeto de la clase FormControl por cada control visual que contendrá nuestro formulario.*/
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

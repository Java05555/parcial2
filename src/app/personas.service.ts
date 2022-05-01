/*Gestionamos el servicio */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/*importa el observable con rxjs */

export interface Persona {
  /*creamos una interface para declarar con que datos trabajamos */
  /*ingresamos los datos de la persona */
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  estado: string;
}
@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private personas: Persona[]; /*crear una propiedad que representa el array con todas las personas que se trabajara */
  private personas$: Subject<Persona[]>;
  /*creamos un subject es la que permitira lanzar el evento para los que se suscriban al observable detecten que esta pasando y emitimos un array */

  constructor() {
    this.personas = [];
    /*cuando nuestra aplicacion empiece no tenemos que tener ninguna persona ingresada */
    this.personas$ =
      new Subject(); /*inicializamos el subject para poder utilizarlo */
  }
  /*creamos metodos para acceder a nuestros servicios */
  agregarPersona(pPersona: Persona) {
    /*por parametro vendra una persona */
    this.personas.push(pPersona); /*agregamos la nueva persona */
    this.personas$.next(this.personas); /*recibiremos los suscritos */
  }
  /*creamos un metodo */
  getPersonas$(): Observable<Persona[]> {
    /*devolvemos un array de personas */
    return this.personas$.asObservable(); /*retornamos el subject  y vemos que lo procedemos a observable para suscribirnos */
  }
}

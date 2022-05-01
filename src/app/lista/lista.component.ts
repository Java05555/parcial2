import { Persona, PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  arrPersonas: Persona[] | undefined;
  /*creamos una propiedad de array de personas */
  constructor(private personasService: PersonasService) {}
  /*colocamos el servicio */

  ngOnInit(): void {
    /*nos suscribimos para los cambios que hayan en el servicio */
    this.personasService.getPersonas$().subscribe((personas) => {
      /*devolvemos un observable lo cual nos podemos suscribir y recibimos el array de personas */
      this.arrPersonas = personas;
      /*pasar los valores del array de personas */
    });
  }
}

import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
/*importar los tipos FormControl, FormGroup  */

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  /*Generar instancia de Formulario de tipo FormGroup */
  constructor(private personasService: PersonasService) {
    /*colocamos el servicio importado*/
    /*iniciar la instancia con los campos necesarios con un tipo de objeto FormGroup */
    this.formulario = new FormGroup({
      /*Colocar los campos con lo que se trabajara */
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      estado: new FormControl(),
    });
  }
  ngOnInit(): void {}
  /*Crear un metodo onSUbmit donde mandaremos resultados */
  onSubmit() {
    this.personasService.agregarPersona(this.formulario.value);
    /*llamamos al metodo agregar persona  y pasamos los valores del formulario */
  }
}

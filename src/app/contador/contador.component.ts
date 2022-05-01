import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  numPersonas!: number;
  constructor(private PersonasService: PersonasService) {
    this.numPersonas = 0;
  }

  ngOnInit(): void {
    this.PersonasService.getPersonas$().subscribe((personas) => {
      this.numPersonas = personas.length;
    });
  }
}

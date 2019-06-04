import { Component, OnInit, NgModule } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import {NgForm, NgModel} from '@angular/forms';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-encuesta-cliente',
  templateUrl: './encuesta-cliente.component.html',
  styleUrls: ['./encuesta-cliente.component.css']
})

export class EncuestaClienteComponent implements OnInit {
  preguntas: Pregunta[];

  constructor(public encuestasService: EncuestasService) {}

  ngOnInit() {
    this.preguntas = [{
      id: 1,
      contenido : '1. ¿Cómo se sintió respecto al tiempo que tuvo que esperar antes de realizar la transacción?',
      calificacion : [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      contenido : '2. ¿Cómo se sintió respecto al tiempo que le tomó al empleado realizar la transacción?',
      calificacion : [1, 2, 3, 4, 5]
    },
    {
      id: 3,
      contenido: '3. ¿Cómo se sintió respecto a la actitud del personal?',
      calificacion : [1, 2, 3, 4, 5]
    }];
  }
  onSubmit(form: NgForm) {
    console.log(form.value.string);
    //Para enviar usa el metodo encuestasService.saveEncuesta(encuestaSend: EncuestaSend) donde deber recordar crear un objeto con el modelo EncuestaSend y a cada campo
    //Se le añade los valores necesarios, cliente, zona, calificaciones, observaciones
  }
}

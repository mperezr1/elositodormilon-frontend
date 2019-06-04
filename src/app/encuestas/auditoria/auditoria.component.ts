import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta.model';
import { Seccion } from '../seccion.component';
import { NgForm, NgModel} from '@angular/forms';
import { AuditoriaService } from '../auditoria.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit {
  preguntas: Pregunta[];
  secciones: Seccion[];

  constructor(public auditoriaService: AuditoriaService){}
  ngOnInit() {
    this.preguntas = [{
      id: 1,
      seccion: 1,
      contenido: '1.1. ¿Todos los productos se encuentran en el pasillo correcto?',
      calificacion: [0, 1]
    },{
      id: 2,
      seccion: 1,
      contenido: '1.2. ¿Todos los productos se encuentran en su estante de referencia?',
      calificacion: [0, 1]
    },{
      id: 3,
      seccion: 1,
      contenido: '1.3. ¿Los estantes poseen buena iluminación?',
      calificacion: [0, 1]
    },{
      id: 4,
      seccion: 1,
      contenido: '1.4. ¿Los estantes están surtidos?',
      calificacion: [0, 1]
    },{
      id: 5,
      seccion: 2,
      contenido: '2.1. ¿El local cumple con los certificados de salubridad necesarios?',
      calificacion: [0, 1]
    },{
      id: 6,
      seccion: 2,
      contenido: '2.2. ¿Se realizan limpiezas en los horarios asignados?',
      calificacion: [0, 1]
    },{
      id: 7,
      seccion: 2,
      contenido: '2.3. ¿Hay un buen tiempo de respuesta cuando se da un efecto que afecte la limpieza del local?',
      calificacion: [0, 1]
    },{
      id: 8,
      seccion: 3,
      contenido: '3.1. ¿Hay promoción de la salud y el bienestar por parte del local?',
      calificacion: [0, 1]
    },{
      id: 9,
      seccion: 3,
      contenido: '3.2. ¿Los índices de satisfacción de los clientes se encuentran por encima del 85%?',
      calificacion: [0, 1]
    },{
      id: 10,
      seccion: 3,
      contenido: '3.3. ¿La atención de clientes es diligente?',
      calificacion: [0, 1]
    },{
      id: 11,
      seccion: 3,
      contenido: '3.4. ¿Se vive el valor de la puntualidad al interior del local?',
      calificacion: [0, 1]
    },{
      id: 12,
      seccion: 4,
      contenido: '4.1. ¿Hay fallas de inventario?',
      calificacion: [0, 1]
    },{
      id: 13,
      seccion: 4,
      contenido: '4.2. ¿Se siguen los procesos de gestión del inventario?',
      calificacion: [0, 1]
    },{
      id: 14,
      seccion: 4,
      contenido: '4.3. ¿Se realiza un control de la caducidad de los productos por medio de un mecanismo FIFO?',
      calificacion: [0, 1]
    },{
      id: 15,
      seccion: 5,
      contenido: '5.1. ¿Se promocionan los productos de otras sesiones?',
      calificacion: [0, 1]
    },{
      id: 16,
      seccion: 5,
      contenido: '5.2. ¿Se promocionan los servicios de la compañía?',
      calificacion: [0, 1]
    },{
      id: 17,
      seccion: 5,
      contenido: '5.3. ¿Se promocionan las líneas exclusivas de productos?',
      calificacion: [0, 1]
    },{
      id: 18,
      seccion: 6,
      contenido: '6.1. ¿Se documentan las ordenes especiales?',
      calificacion: [0, 1]
    },{
      id: 19,
      seccion: 6,
      contenido: '6.2. ¿Se hace seguimiento de las ordenes hasta que estén completadas?',
      calificacion: [0, 1]
    },{
      id: 20,
      seccion: 6,
      contenido: '6.3. ¿Los soportes legales del local están en regla?',
      calificacion: [0, 1]
    }];

    this.secciones = [{
      id: 1,
      nombre: '1. Estantes'
    },{
      id: 2,
      nombre: '2. Limpieza'
    },{
      id: 3,
      nombre: '3. Valores'
    },{
      id: 4,
      nombre: '4. Inventario'
    },{
      id: 5,
      nombre: '5. Promoción'
    },{
      id: 6,
      nombre: '6. Documentación'
    }
    ];
  }

  onSubmit(form: NgForm) {
    this.auditoriaService.saveAuditoria({
      evaluacion: [
        form.value.myChoice1,
        form.value.myChoice2,
        form.value.myChoice3,
        form.value.myChoice4,
        form.value.myChoice5,
        form.value.myChoice6,
        form.value.myChoice7,
        form.value.myChoice8,
        form.value.myChoice9,
        form.value.myChoice10,
        form.value.myChoice11,
        form.value.myChoice12,
        form.value.myChoice13,
        form.value.myChoice14,
        form.value.myChoice15,
        form.value.myChoice16,
        form.value.myChoice17,
        form.value.myChoice18,
        form.value.myChoice19,
        form.value.myChoice20
      ],
      anotaciones: form.value.obse
    });
  }
}

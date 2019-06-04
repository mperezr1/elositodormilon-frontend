import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncuestaSend } from './encuestaSend.model';

@Injectable({providedIn: 'root'})
export class EncuestasService{


  constructor(private http: HttpClient) {}

  saveEncuesta(encuestaSend: EncuestaSend) {
    const postData = {
      cliente: encuestaSend.cliente,
      zona: encuestaSend.zona,
      calificaciones: encuestaSend.calificaciones,
      observaciones: encuestaSend.observaciones
    }
    this.http
      .post<EncuestaSend>(
        'http://localhost:5002/encuestas_cliente',
        postData
      )
      .subscribe(responseData => {
        console.log('Se lograron enviar los archivos a la db');
      });
    }

}

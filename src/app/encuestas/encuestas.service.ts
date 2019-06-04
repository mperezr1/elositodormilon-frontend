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
    };
    console.log(postData);
    this.http
      .post<EncuestaSend>(
        'http://localhost:5002/save_encuesta',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
    }

}

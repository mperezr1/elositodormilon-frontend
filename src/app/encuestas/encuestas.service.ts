import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncuestaSend } from './encuestaSend.model';
import { EncuestaInfo } from './encuestas-info.model';
import { InfoEncuestas } from '../franquiciados/infoEncuestas.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EncuestasService{

  private infoEncuesta: EncuestaInfo;
  private infoEncuestaUpdate = new Subject<EncuestaInfo>();

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
        console.log("Se logro enviar la encuesta");
      })
    }

  getInfoEncuestaUpdate(){
    return this.infoEncuestaUpdate.asObservable();
  }

  getInfoRecompensa(zonas: string){
    const postData = {
      zona: zonas
    }
    this.http.post<EncuestaInfo>('http://localhost:5002/recompensas', postData)
    .subscribe(response => {
      const posts: EncuestaInfo = response;
      this.infoEncuesta = posts;
      this.infoEncuestaUpdate.next(this.infoEncuesta);
    })
  }

}

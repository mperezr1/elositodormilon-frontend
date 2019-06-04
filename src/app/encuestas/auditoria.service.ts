import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuditoriaSend } from './auditoriaSend.model';

@Injectable({providedIn: 'root'})
export class AuditoriaService{


  constructor(private http: HttpClient) {}

  saveAuditoria(auditoriaSend: AuditoriaSend) {
    const postData = {
    };

    this.http
      .post<AuditoriaSend>(
        'http://localhost:5002/save_auditoria',
        postData
      )
      .subscribe(responseData => {
        console.log('Se lograron enviar los archivos a la db');
      });
    }

}

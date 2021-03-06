import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Franquicias } from './franquicias.model';
import { Injectable } from '@angular/core';
import { Empleados } from './empleados.model';
import { Router } from "@angular/router";
import { EmpleadosDetailCursos } from './empleadosCursoDetail.model';
import { InfoEncuestas } from './infoEncuestas.model';

@Injectable({providedIn: 'root'})
export class FranquiciadosService{
  private listaFranquiciados: Franquicias;
  private listaFranquiciadosUpdate = new Subject<Franquicias>();

  private listaEmpleadosZona: Empleados[];
  private listaEmpleadosZonaUpdate = new Subject<Empleados[]>();

  private empleadoDetail: EmpleadosDetailCursos;
  private empleadoDetailUpdate = new Subject<EmpleadosDetailCursos>();

  private infoEncuestas: InfoEncuestas;
  private infoEncuestasUpdate = new Subject<InfoEncuestas>();

  private infoAuditorias: string[];
  private infoAuditoriasUpdate = new Subject<string[]>();

  private fechaAuditorias: string[];
  private fechaAuditoriasUpdate = new Subject<string[]>()

  constructor(private http: HttpClient, private router: Router) {}

  getFranquiciados(){
    this.http.get<Franquicias>('http://localhost:5002/franquicias')
    .subscribe((res)=> {
    this.listaFranquiciados = res;
    this.listaFranquiciadosUpdate.next(this.listaFranquiciados);
    });
  }

  getFechaAuditoria(zonas: string){
    const postData = {
      zona: zonas
    }
    this.http
      .post<string[]>(
        'http://localhost:5002/auditorias',
        postData
      )
      .subscribe(responseData => {
        const post: string[] = responseData;
        this.fechaAuditorias = post;
        this.fechaAuditoriasUpdate.next(this.fechaAuditorias);
      });
}

getFechaAuditoriaUpdate(){
  return this.fechaAuditoriasUpdate.asObservable();
}

  getFranquiciadosUpdate(){
    return this.listaFranquiciadosUpdate.asObservable();
  }

  getEmpleadosZona(zonas: string){
    const postData = {
      zona: zonas
    }
    this.http
      .post<Empleados[]>(
        'http://localhost:5002/cursos',
        postData
      )
      .subscribe(responseData => {
        const post: Empleados[] = responseData;
        this.listaEmpleadosZona = post;
        this.listaEmpleadosZonaUpdate.next([...this.listaEmpleadosZona]);
      });

    this.router.navigate(['/empleadosZona']);
}

getEmpleadosZonaListUpdate(){
  return this.listaEmpleadosZonaUpdate.asObservable();
}

getEmpleadosDetail(ids: string){
  const postData = {
    codigo: ids
  }
  this.http
    .post<EmpleadosDetailCursos>(
      'http://localhost:5002/empleados',
      postData
    )
    .subscribe(responseData => {
      const post: EmpleadosDetailCursos = responseData;
      this.empleadoDetail = post;
      this.empleadoDetailUpdate.next(this.empleadoDetail);
    });

  this.router.navigate(['/empleadosDetail']);
}

getEmpleadosDetailUpdate(){
  return this.empleadoDetailUpdate.asObservable();
}

getInfoEncuestas(zonas: string){
  const postData = {
    zona: zonas
  }
  this.http
    .post<InfoEncuestas>(
      'http://localhost:5002/encuestas_cliente',
      postData
    )
    .subscribe(responseData => {
      const post: InfoEncuestas = responseData;
      this.infoEncuestas = post;
      this.infoEncuestasUpdate.next(this.infoEncuestas);
    });
}

getInfoAuditoria(zona: string){
  const postData = {
    zona: zona
  };
  this.http
    .post<string[]>(
      'http://localhost:5002/auditorias',
      postData
    )
    .subscribe(responseData => {
      const post: string[] = responseData;
      this.infoAuditorias = post;
      this.infoAuditoriasUpdate.next(this.infoAuditorias);
    });
}

getInfoEncuestasUpdate() {
  return this.infoEncuestasUpdate.asObservable();
}

}

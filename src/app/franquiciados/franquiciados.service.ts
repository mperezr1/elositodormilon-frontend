import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Franquicias } from './franquicias.model';
import { Injectable } from '@angular/core';
import { Empleados } from './empleados.model';
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class FranquiciadosService{
  private listaFranquiciados: Franquicias;
  private listaFranquiciadosUpdate = new Subject<Franquicias>();

  private listaEmpleadosZona: Empleados[];
  private listaEmpleadosZonaUpdate = new Subject<Empleados[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getFranquiciados(){
    this.http.get<Franquicias>('http://localhost:5002/franquicias')
    .subscribe((res)=> {
    this.listaFranquiciados = res;
    this.listaFranquiciadosUpdate.next(this.listaFranquiciados);
    });
  }

  getFranquiciadosUpdate(){
    return this.listaFranquiciadosUpdate.asObservable();
  }

  getEmpleadosZona(zona: string){

    const postData = {
      zona: zona
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
}

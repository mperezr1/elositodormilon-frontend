import { Component, OnInit, OnDestroy} from '@angular/core';
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';
import { Empleados } from '../empleados.model';
import { InfoEncuestas } from '../infoEncuestas.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit, OnDestroy{
  listaEmpleadosZona = [];
  infoEncuestas: InfoEncuestas;
  infoAuditoria: string[];
  fechaAuditorias: string[];

  private fechasAuditoriasSub: Subscription;
  private infoEncuestasSub: Subscription;
  private listaEmpleadosSub: Subscription;

  constructor(public franquiciadosService: FranquiciadosService, private authService: AuthService){}
  private authListenerSub: Subscription;
  userIsAuthenticated = false;

isGerente() {
  if(this.authService.actualRol === 'Gerente'){
    return true;
  } else {
    return false;
  }
}

isAdmin() {
  if(this.authService.actualRol === 'Admin'){
    return true;
  }else{
    return false;
  }
}

isAuditor() {
  if(this.authService.actualRol === 'Auditor'){
    return true;
  } else {
    return false;
  }
}
  ngOnInit() {
  this.infoEncuestasSub = this.franquiciadosService.getInfoEncuestasUpdate()
  .subscribe((posts: InfoEncuestas) => {
    this.infoEncuestas = posts;
  }
  
  );

  this.fechasAuditoriasSub = this.franquiciadosService.getFechaAuditoriaUpdate()
  .subscribe((posts: string[]) => {
    this.fechasAuditorias = posts;
    console.log(this.fechasAuditorias);
  });

  this.listaEmpleadosSub = this.franquiciadosService.getEmpleadosZonaListUpdate()
  .subscribe((posts: Empleados[]) => {
    this.listaEmpleadosZona = posts;
  });

  this.authListenerSub =  this.authService.getAuthStatus().subscribe(isAuth => {
    this.userIsAuthenticated = true;
  });
  }

  ngOnDestroy(){
    this.listaEmpleadosSub.unsubscribe();
    this.infoEncuestasSub.unsubscribe();
    this.authListenerSub.unsubscribe();
    this.fechasAuditoriasSub.unsubscribe();
  }

  sendEmpleado(id: string){
    this.franquiciadosService.getEmpleadosDetail(id);
  }

}

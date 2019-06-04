import { Component, OnInit, OnDestroy } from "@angular/core";
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';
import { EmpleadosDetailCursos } from '../empleadosCursoDetail.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-descripcion-empleado',
  templateUrl: './descEml.component.html',
  styleUrls: ['./descEml.component.css']
})
export class DescripcionEmpleadosComponent implements OnInit, OnDestroy {
  empleadoZona: EmpleadosDetailCursos;
  private empleadoDetailSub: Subscription;

  constructor(public franquiciadosService: FranquiciadosService, private authService: AuthService) {}
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
    this.empleadoDetailSub = this.franquiciadosService.getEmpleadosDetailUpdate()
    .subscribe((posts: EmpleadosDetailCursos) => {
      this.empleadoZona = posts;
    });
    this.authListenerSub =  this.authService.getAuthStatus().subscribe(isAuth => {
      this.userIsAuthenticated = true;
  });
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
    this.empleadoDetailSub.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy} from '@angular/core';
import { Franquicias } from '../franquicias.model';
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list-franquiciados',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy{
  listaFranquiciados: Franquicias[] = [];
  private franquiciadosSub: Subscription;

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

    this.franquiciadosService.getFranquiciados();
    this.franquiciadosSub = this.franquiciadosService.getFranquiciadosUpdate()
    .subscribe((lista: Franquicias) => {
      this.listaFranquiciados.push(lista);
    });

    this.authListenerSub =  this.authService.getAuthStatus().subscribe(isAuth => {
      this.userIsAuthenticated = true;
  });

  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
    this.franquiciadosSub.unsubscribe();
  }

  sendZone(zona: string){
    this.franquiciadosService.getEmpleadosZona(zona);
    this.franquiciadosService.getInfoEncuestas(zona);
  }


}

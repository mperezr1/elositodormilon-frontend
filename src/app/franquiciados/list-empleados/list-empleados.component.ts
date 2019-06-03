import { Component, OnInit, OnDestroy} from '@angular/core';
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';
import { Empleados } from '../empleados.model';
import { InfoEncuestas } from '../infoEncuestas.model';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit, OnDestroy{
  listaEmpleadosZona = [];
  infoEncuestas: InfoEncuestas;

  private infoEncuestasSub: Subscription;
  private listaEmpleadosSub: Subscription;

  constructor(public franquiciadosService: FranquiciadosService){}

  ngOnInit() {
  this.infoEncuestasSub = this.franquiciadosService.getInfoEncuestasUpdate()
  .subscribe((posts: InfoEncuestas) => {
    this.infoEncuestas = posts;
  });

  this.listaEmpleadosSub = this.franquiciadosService.getEmpleadosZonaListUpdate()
  .subscribe((posts: Empleados[]) => {
    this.listaEmpleadosZona = posts;
  });
  }

  ngOnDestroy(){
    this.listaEmpleadosSub.unsubscribe();
    this.infoEncuestasSub.unsubscribe();
  }

  sendEmpleado(id: string){
    this.franquiciadosService.getEmpleadosDetail(id);
  }

}

import { Component, OnInit, OnDestroy} from '@angular/core';
import { Franquicias } from '../franquicias.model';
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-franquiciados',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy{
  listaFranquiciados: Franquicias[] = [];
  private franquiciadosSub: Subscription;

  constructor(public franquiciadosService: FranquiciadosService){}

  ngOnInit() {

    this.franquiciadosService.getFranquiciados();
    this.franquiciadosSub = this.franquiciadosService.getFranquiciadosUpdate()
    .subscribe((lista: Franquicias) => {
      this.listaFranquiciados.push(lista);
    });

  }

  ngOnDestroy() {
    this.franquiciadosSub.unsubscribe();
  }

  sendZone(zona: string){
    this.franquiciadosService.getEmpleadosZona(zona);
    this.franquiciadosService.getInfoEncuestas(zona);
  }


}

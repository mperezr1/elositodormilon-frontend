import { Component, OnInit, OnDestroy } from '@angular/core';
import { EncuestasService } from '../encuestas.service';
import { EncuestaInfo } from '../encuestas-info.model';
import { Subscription } from 'rxjs';
import { EncuestaClienteComponent } from '../encuesta-cliente/encuesta-cliente.component';

@Component({
  selector: 'app-recompesa',
  templateUrl: './recompesa.component.html',
  styleUrls: ['./recompesa.component.css']
})
export class RecompesaComponent implements OnInit, OnDestroy {

  constructor(public encuestaService: EncuestasService) { }
  
  infoEncuesta: EncuestaInfo;
  private infoEncuestaUpdate: Subscription;

  ngOnInit() {
  this.infoEncuestaUpdate = this.encuestaService.getInfoEncuestaUpdate()
  .subscribe((post: EncuestaInfo) => {
  this.infoEncuesta = post;
  });
  }

  ngOnDestroy(){
    this.infoEncuestaUpdate.unsubscribe();
  }

}

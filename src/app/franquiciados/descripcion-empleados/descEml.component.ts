import { Component, OnInit, OnDestroy } from "@angular/core";
import { FranquiciadosService } from '../franquiciados.service';
import { Subscription } from 'rxjs';
import { EmpleadosDetailCursos } from '../empleadosCursoDetail.model';

@Component({
  selector: 'app-descripcion-empleado',
  templateUrl: './descEml.component.html',
  styleUrls: ['./descEml.component.css']
})
export class DescripcionEmpleadosComponent implements OnInit, OnDestroy {
  empleadoZona: EmpleadosDetailCursos;
  private empleadoDetailSub: Subscription;

  constructor(public franquiciadosService: FranquiciadosService) {}

  ngOnInit() {
    this.empleadoDetailSub = this.franquiciadosService.getEmpleadosDetailUpdate()
    .subscribe((posts: EmpleadosDetailCursos) => {
      this.empleadoZona = posts;
    });
  }

  ngOnDestroy() {
    this.empleadoDetailSub.unsubscribe();
  }

}

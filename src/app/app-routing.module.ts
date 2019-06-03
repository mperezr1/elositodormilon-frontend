import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './franquiciados/list-franquiciados/list.component';
import { ListaEmpleadosComponent } from './franquiciados/list-empleados/list-empleados.component';
import { DescripcionEmpleadosComponent } from './franquiciados/descripcion-empleados/descEml.component';
import { EncuestaClienteComponent } from './encuestas/encuesta-cliente/encuesta-cliente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'franquicias', component: ListComponent},
  {path: 'empleadosZona', component: ListaEmpleadosComponent},
  {path: 'empleadosDetail', component: DescripcionEmpleadosComponent},
  {path: 'encuesta', component:EncuestaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

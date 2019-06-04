import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './franquiciados/list-franquiciados/list.component';
import { ListaEmpleadosComponent } from './franquiciados/list-empleados/list-empleados.component';
import { DescripcionEmpleadosComponent } from './franquiciados/descripcion-empleados/descEml.component';
import { EncuestaClienteComponent } from './encuestas/encuesta-cliente/encuesta-cliente.component';
import { AuditoriaComponent } from './encuestas/auditoria/auditoria.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'franquicias', component: ListComponent},
  {path: 'empleadosZona', component: ListaEmpleadosComponent},
  {path: 'empleadosDetail', component: DescripcionEmpleadosComponent},
  {path: 'encuesta', component: EncuestaClienteComponent},
  {path: 'auditoria', component: AuditoriaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

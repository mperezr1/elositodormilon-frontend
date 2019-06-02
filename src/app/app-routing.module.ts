import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './franquiciados/list-franquiciados/list.component';
import { ListaEmpleadosComponent } from './franquiciados/list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'empleadosZona', component: ListaEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

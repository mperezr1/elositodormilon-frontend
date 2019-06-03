import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule ,
         MatToolbarModule,
         MatCardModule,
         MatButtonModule,
         MatExpansionModule,
         MatOptionModule,
         MatSelectModule,
         MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './franquiciados/list-franquiciados/list.component';
import { ListaEmpleadosComponent } from './franquiciados/list-empleados/list-empleados.component';
import { DescripcionEmpleadosComponent } from './franquiciados/descripcion-empleados/descEml.component';
import { EncuestaClienteComponent } from './encuestas/encuesta-cliente/encuesta-cliente.component';
import { AuditoriaComponent } from './encuestas/auditoria/auditoria.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListaEmpleadosComponent,
    DescripcionEmpleadosComponent,
    EncuestaClienteComponent,
    AuditoriaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private token: string;
public nombre: string;
public actualRol: string;
private userName: string;
private authStatus = new Subject<boolean>();

getToken() {
  return this.token;
}

getAuthStatus(){
  return this.authStatus.asObservable();
}

getPriority(){
  return this.actualRol;
}

getUserName(){
  return this.userName;
}


// //Esto es para usuarios regulares
// createUser(nombreIn: string, apellidoIn: string, emailIn: string, passwordIn: string, documentoIn: number, contactoIn: number){
// const authData: regularUser = {
//   nombre: nombreIn,
//   apellido: apellidoIn,
//   prioridad: null,
//   documento: documentoIn,
//   contacto: contactoIn,
//   email: emailIn,
//   password: passwordIn
// }
// this.http.post<{message: number, token: string}>('https://quiet-retreat-14647.herokuapp.com/api/auth/signup',authData).subscribe(res => {
//   if(res.message === 0){
//     alert('Usuario creado exitosamente.');
//     this.login(authData.email, authData.password);
//   }else if(res.message === 1){
//     alert('Usuario ya existe');
//   }else {
//     alert('Problema al registrar.');
//   }
// });
// }

login(emailIn: string, passwordIn: string) {
const authData = {
  email: emailIn,
  password: passwordIn
}
this.http.post<{token: string, rol: string}>('http://localhost:5002/users/login',authData).subscribe(res => {
  const tokenIn = res.token;
  this.actualRol = res.rol;
  this.token = tokenIn;
  if(tokenIn){
  this.authStatus.next(true);
  this.userName = authData.email;
  this.router.navigate(['/home']);
  }
  console.log(this.actualRol);
});
}

logout() {
  this.token = null;
  this.authStatus.next(false);
  this.router.navigate(['/']);
}

constructor(private http: HttpClient, private router: Router) { }
}

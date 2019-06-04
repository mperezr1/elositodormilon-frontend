import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

constructor(private authService: AuthService) {}

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

onLogout(){
  this.authListenerSub =  this.authService.getAuthStatus().subscribe(isAuth => {
    this.userIsAuthenticated = false;
});
  this.authService.logout();
  this.authListenerSub.unsubscribe();
}

ngOnInit() {
  this.authListenerSub =  this.authService.getAuthStatus().subscribe(isAuth => {
    this.userIsAuthenticated = true;
});
}

ngOnDestroy() {
this.authListenerSub.unsubscribe();
}

}

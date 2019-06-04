import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService) {}

  private authStatusSub: Subscription;
  userIsAuth = false;

  onLogin(form: NgForm) {

    if(form.invalid){
      console.log('Ingrese datos.');
    } else {
      this.authService.login(form.value.email, form.value.password);
    }

  }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatus().subscribe(res => {
      this.userIsAuth = res;
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}

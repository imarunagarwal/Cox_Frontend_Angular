import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Core/Services/user.service';
import { NgForm } from '@angular/forms';
import { ILoginModel, IResponse } from '../Core/Models/Models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    email: string = '';
    password: string = '';
    isLoginError: boolean = false;
  
  
    constructor(private userService: UserService, private router: Router) { }
  
    login(form: NgForm) {
      const user: ILoginModel = { EmailId: this.email, Password: this.password };
      this.userService.userLogin(user).subscribe((response: IResponse) => {
        localStorage.setItem('bearerTokenCox', response.token);
        this.userService.setIsLoggedInObserver(true);
        this.router.navigate(['dashboard']);
      },
        (err: HttpErrorResponse) => {
          this.isLoginError = true;
        });
    }
  }
  
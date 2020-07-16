import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Core/Services/user.service';
import { NgForm } from '@angular/forms';
import { ILoginModel, IResponse } from '../Core/Models/Models';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  isLoginError: boolean = false;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  login(form: NgForm) {
    const user: ILoginModel = form.value;
    this.userService.userLogin(user).subscribe((response: IResponse) => {
      localStorage.setItem('bearerTokenCox', response.token);
      this.userService.setIsLoggedInObserver(true);
      this.toastr.success("Successful", "Login");
      this.router.navigate(['dashboard']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
      this.toastr.error("Failed", "Login");
      });
  }
}

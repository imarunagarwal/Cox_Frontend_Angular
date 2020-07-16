import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Core/Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(private router: Router, private userService: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getIsLoggedInObserver().subscribe(response => {
      this.isLoggedIn = response;
    });
  }

  LogOut() {
    localStorage.removeItem('bearerTokenCox');
    this.userService.setIsLoggedInObserver(false);
    this.toastr.success("Successful", "Logout");
    this.router.navigate(['landing']);
  }
}

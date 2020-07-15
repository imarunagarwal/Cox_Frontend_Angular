import { Component, OnInit } from '@angular/core';
import { UserService } from '../Core/Services/user.service';
import { IDashboardModel } from '../Core/Models/Models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {
  
  dashboardData: IDashboardModel;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDashboardDetails(2).subscribe((res: IDashboardModel) => {
      this.dashboardData = res;
    })
  }

}

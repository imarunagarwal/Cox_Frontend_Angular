import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(this.loginSubsrcriptionDefaultValue());

  readonly loginUrl = environment.loginUrl;
  readonly dashboardUrl = environment.dashboardUrl;

  constructor(private http: HttpClient) { }

  loginSubsrcriptionDefaultValue(): boolean {
    if (localStorage.getItem('bearerTokenCox') === null) {
      return false;
    }
    else {
      return true;
    }
  }

  public setIsLoggedInObserver(flag: boolean) {
    this.isLoggedIn$.next(flag);
  }

  public getIsLoggedInObserver(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  userLogin(user) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.loginUrl, user, { headers: reqHeader });
  }

  getDashboardDetails(id: number) {
    return this.http.get(`${this.dashboardUrl}/${id}`);
  }
}

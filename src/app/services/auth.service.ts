import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3030'


  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

    //User
  singin(user:any){
return this.http.post(`${this.URL}/user/login`,user);
  }

  register(user:any){
    return this.http.post(`${this.URL}/user`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) ||!localStorage.getItem('token')){
      return false;
    }
    return true;
  }


  //Customer
  
  customerCreate(customer:any){
    return this.http.post(`${this.URL}/customer`,customer)
  };

  customerList(customer:any){
    return this.http.get(`${this.URL}/customer`)
  }

  //Phone

  phoneCreate(phone:any){
    return this.http.post(`${this.URL}/phone`,phone)
  }

  phoneList(phone:any){
    return this.http.get(`${this.URL}/phone`)
  }


  //Fix
  fixCreate(fix:any){
    return this.http.post(`${this.URL}/fix`,fix)
  }

  fixList(fix:any){
    return this.http.get(`${this.URL}/fix`)
  }

  
}

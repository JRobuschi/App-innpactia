import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    username: 'admin',
    password: 'admin'
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  logIn(){
    console.log(this.user)
    this.authService.singin(this.user).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('token',res.token);
      this.router.navigate(['private']);
    })
  }
}

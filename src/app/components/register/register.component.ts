import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: 'admin',
    password: 'admin'
  }

  constructor(
    private authService: AuthService
  ){}

  logIn(){
    console.log(this.user)
    this.authService.register(this.user).subscribe((res:any)=>{
      console.log(res)
      
    })
  }
}

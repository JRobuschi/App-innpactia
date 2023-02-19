import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './duards/auth.guard';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'private',component: PrivateComponent, canActivate: [AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

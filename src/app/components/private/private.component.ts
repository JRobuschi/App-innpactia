import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {

  customer = {
    name: '',
    lastName: ''
  };

  phone={
    customerIdCustomer:'' ,
    phone_number:'' ,
    model:''
  }

  fix={
    
    phonePhoneId:'',
    error:'',
    description:''
  }

  customers: Array<{ id_customer: number, name: string, lastName: string }> = [];

  phones: Array<{ phone_id: number, phone_number: number, model: string, customerIdCustomer:number}> = [];

  fixs: Array<{ fix_id: number, error: string, description: string, phonePhoneId:number, createdAt:Date}> = [];

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.customerAll();
    this.phoneAll();
    this.fixAll();
  }

  customerAdd(){
    console.log(this.customer);
    this.authService.customerCreate(this.customer).subscribe((res:any)=>{
      console.log(res)
    })
  }

  customerAll() {
    this.authService.customerList(this.customer).subscribe((res:any) => {
      this.customers = res.data; 
    });
  };
  
  phoneAdd(){
    console.log(this.phone);
    this.authService.phoneCreate(this.phone).subscribe((res:any)=>{
      console.log(res)
    })
  }

  phoneAll(){
    this.authService.phoneList(this.phone).subscribe((res:any)=>{
      this.phones = res.data;
    })
  }
  
  fixAdd(){
    console.log(this.fix);
    this.authService.fixCreate(this.fix).subscribe((res:any)=>{
      console.log(res)
    })
  }

  fixAll(){
    this.authService.fixList(this.fix).subscribe((res:any)=>{
      this.fixs = res.data;
    })
  }
  
  

}

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkoutForm;
  ErrorLogin=false;

  ngOnInit() {
  }
  constructor(private loginService:LoginService,private formBuilder: FormBuilder,private router: Router) {
    if(this.loginService.isLoggedin()){
      this.router.navigate(['/user/profile'])
    }
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }



  onSubmit(customerData) {
    // Process checkout data here
    console.log(customerData.password.toString());
    this.loginService.LogIn(customerData.email.toString(),customerData.password.toString())
    // @ts-ignore
    waits(1000);
    if(!this.loginService.isLoggedin())
      this.ErrorLogin =true;

  }

}

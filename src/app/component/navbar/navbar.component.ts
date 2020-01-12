import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) {

  }
  isLoggedin(){
    return this.loginService.isLoggedin();
  }
  LogOut(){
    this.loginService.LogOut();
  }
  getUserInfo(){
    return this.loginService.getUserInfo();
  }
  ngOnInit() {
  }

}

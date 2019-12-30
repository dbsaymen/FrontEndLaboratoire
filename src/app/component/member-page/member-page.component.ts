import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {MembreReturn} from '../../models/MembreReturn';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  member:MembreReturn;
  constructor(private loginService :LoginService,private router: Router) { }

  ngOnInit() {
    

  }
}

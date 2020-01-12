import { Component, OnInit } from '@angular/core';
import {MembreReturn} from '../../../models/MembreReturn';
import {LoginService} from '../../../service/login.service';
import {EnseignantChercheurReturn} from '../../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../../models/EtudiantReturn';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  member:any;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getUserInfo().type=='etudiant'){
      this.member = new EtudiantReturn();
      this.member= this.loginService.getUserInfo();
    }else {
      this.member = new EnseignantChercheurReturn();
      this.member= this.loginService.getUserInfo();
    }
  }

}

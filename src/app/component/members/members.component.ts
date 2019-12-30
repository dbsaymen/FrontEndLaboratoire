import {Component, OnInit} from '@angular/core';
import {MembreService} from 'src/app/service/membre.service';
import {MembreReturn} from 'src/app/models/MembreReturn';
import {EnseignantChercheur} from '../../models/EnseignantChercheur';
import {EnseignantChercheurReturn} from '../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../models/EtudiantReturn';
import { Utils } from '../../shared/utils';
declare var jQuery: any;
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  etudiants:MembreReturn[] = [];
  enseigants:MembreReturn[] = [];
  baseURL="http://localhost:4200/members";

  constructor(private membreService: MembreService) {
  }

  ngOnInit() {
    this.findAll();
  }
  
  findAll(){
    this.membreService.findAll()
    .subscribe((data: MembreReturn[]) => {
      for (let membre of data){
        if (membre.type=="etudiant")
          this.etudiants.push(membre);
        else
          this.enseigants.push(membre);
      }
      }
    );
  }
}

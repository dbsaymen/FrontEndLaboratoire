import {Component, OnInit} from '@angular/core';
import {MembreService} from 'src/app/service/membre.service';
import {MembreReturn} from 'src/app/models/MembreReturn';
import {EnseignantChercheur} from '../../models/EnseignantChercheur';
import {EnseignantChercheurReturn} from '../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../models/EtudiantReturn';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  membres: MembreReturn[] = [];

  constructor(private membreService: MembreService) {
  }

  ngOnInit() {
    this.membreService.findAll()
      .subscribe((data: MembreReturn[]) => {
          this.membres = data;
        }
      );

  }

}

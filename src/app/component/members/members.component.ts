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

  constructor(private membreService: MembreService) {
  }

  ngOnInit() {
    this.box();
    this.findAll();
    
  }
  box(){
    jQuery(window).load(function() {
      jQuery('#content .featured_carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        minItems: Utils.getGridSize(), // use function to pull in initial value
        maxItems: Utils.getGridSize() // use function to pull in initial value
      });
      });
  }
  findAll(){
    this.membreService.findAll()
    .subscribe((data: MembreReturn[]) => {
      for (let membre of data){
        console.log(membre.grade);
        if (membre.type=="etudiant")
          this.etudiants.push(membre);
        else
          this.enseigants.push(membre);
      }
      }
    );
  }
}

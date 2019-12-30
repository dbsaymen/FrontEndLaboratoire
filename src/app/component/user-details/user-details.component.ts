import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MembreService} from '../../service/membre.service';
import {switchMap} from 'rxjs/operators';
import {MembreReturn} from '../../models/MembreReturn';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  member:MembreReturn;
  constructor(private route: ActivatedRoute,
              private router: Router,private memberService:MembreService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.memberService.findByPublicID(id).subscribe(data=>{
      if(data==null) this.router.navigate(['/404'])
      this.member=data;
    },
    err=>{
        this.router.navigate(['/404'])
    }
    )
  }

}

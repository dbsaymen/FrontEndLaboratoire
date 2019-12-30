import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../service/membre.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(private memberService:MembreService) { }

  ngOnInit() {
    this.memberService.findAll().subscribe(data =>{
      console.log(data);
    })
  }

}

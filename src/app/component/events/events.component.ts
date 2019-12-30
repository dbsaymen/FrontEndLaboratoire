import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../../service/evenement.service';
import {Evenement} from '../../models/Evenement';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  ev:Evenement[];
  constructor(private evenementService:EvenementService) { }

  ngOnInit() {
    this.evenementService.findAll()
    .subscribe((data:Evenement[])=>{
      this.ev=data;
    })
  }

  

}

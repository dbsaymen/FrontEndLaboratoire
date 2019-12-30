import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../service/publication.service';
import {Publication} from '../../models/Publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  pubs:Publication[];
  constructor(private publicationService:PublicationService) { }

  ngOnInit() {
    this.publicationService.findAll()
    .subscribe((data:Publication[])=>{
      this.pubs=data;
    })
  }

}

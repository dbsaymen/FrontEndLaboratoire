import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { EnseignantChercheur } from '../models/EnseignantChercheur';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnseignantChercheurService {

  constructor(private http: HttpClient) { }

  addEnseignant(enseignant:EnseignantChercheur){
    return this.http.post<EnseignantChercheur>(environment.baseUrl + "/membres/enseignant",enseignant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(enseignant:EnseignantChercheur){
    return this.http.put<EnseignantChercheur>(environment.baseUrl + "/membres/enseignant/"+enseignant.id,enseignant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
    });
  }

  findByGrade(grade:string){
    return this.http.get(environment.baseUrl+"/membre/search/grade",{params:{grade:grade}});
  }

  findByEtablissement(etablissement:string){
    return this.http.get(environment.baseUrl+"/membre/search/etablissement",{params:{etablissement:etablissement}});
  }
}

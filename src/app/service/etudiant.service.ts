import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  addEnseignant(etudiant:Etudiant){
    return this.http.post<Etudiant>(environment.baseUrl + "/membres/etudiant",etudiant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(etudiant:Etudiant){
    return this.http.put<Etudiant>(environment.baseUrl + "/membres/etudiant/"+etudiant.id,etudiant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
    })
  });
  }

  findByDiplome(diplome:string){
    return this.http.get(environment.baseUrl+"/membre/search/diplome",{params:{diplome:diplome}});
  }
}

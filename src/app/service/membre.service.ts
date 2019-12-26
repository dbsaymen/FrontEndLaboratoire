import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Membre } from '../models/Membre';
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) { }

// Crud sur les membres

  delete(membre:Membre){
    return this.http.delete(environment.baseUrl + "/membres/"+membre.id);
  }

  FindMembre(id:number){
    return this.http.get(environment.baseUrl + '/membre/'+id);
  }

  findAll(){
    return this.http.get(environment.baseUrl + '/membres');
  }

// Filtrage par propriété

  findByCin(cin:string){
    return this.http.get(environment.baseUrl+"/membre/search/cin",{params:{cin:cin}});
  }

  findByEmail(email:string){
    return this.http.get(environment.baseUrl+"/membre/search/email",{params:{email:email}});
  }

  findByNom(nom:string){
    return this.http.get(environment.baseUrl+"/membre/search/nom",{params:{nom:nom}});
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Outil } from '../models/Outil';
@Injectable({
  providedIn: 'root'
})
export class OutilService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get(environment.baseUrl + '/outils');
  }

  findByNom(nom:string){
    return this.http.get(environment.baseUrl+"/outil/search/nom",{params:{nom:nom}});
  }

  findBySource(source:string){
    return this.http.get(environment.baseUrl+"/outil/search/source",{params:{source:source}});
  }

  findByDate(date:string){
    return this.http.get(environment.baseUrl+"/outil/search/date",{params:{date:date}});
    ////////date:Date, params accepte string
  }

  delete(outil:Outil){
    return this.http.delete(environment.baseUrl + "/outils/"+outil.id);
  }

  addOutil(outil:Outil){
    return this.http.post<Outil>(environment.baseUrl + "/outil",outil,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(outil:Outil){
    return this.http.put<Outil>(environment.baseUrl + "/outil/"+outil.id,outil,{
      headers:new HttpHeaders({
          'content-type':'application/json'
    })
  });
  }
}

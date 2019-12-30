import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {MembreReturn} from '../models/MembreReturn';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) {

  }

// Crud sur les membres

  delete(publicID: string) {
    return this.http.delete(environment.baseUrl + '/members/' + publicID);
  }

  FindMembre(id: number) {
    return this.http.get(environment.baseUrl + '/members/' + id);
  }

  findAll() {
    return this.http.get(environment.baseUrl + '/members/',);
  }

// Filtrage par propriété

  findByCin(cin: string) {
    return this.http.get(environment.baseUrl + '/members/search/cin', {params: {cin: cin}});
  }
  findByPublicID(publicID: string):Observable<MembreReturn> {
    return this.http.get<MembreReturn>(environment.baseUrl + '/members/'+publicID, {});
  }

  findByEmail(email: string) {
    return this.http.get(environment.baseUrl + '/members/search/email', {params: {email: email}});
  }

  findByNom(nom: string) {
    return this.http.get(environment.baseUrl + '/members/search/nom', {params: {nom: nom}});
  }
}

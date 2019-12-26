import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get(environment.baseUrl + '/roles');
  }

  delete(role:Role){
    return this.http.delete(environment.baseUrl + "/roles/"+role.roleName);
  }

  addRole(role:Role){
    return this.http.post<Role>(environment.baseUrl + "/role",role,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(role:Role){
    return this.http.put<Role>(environment.baseUrl + "/role/"+role.roleName,role,{
      headers:new HttpHeaders({
          'content-type':'application/json'
    })
  });
  }
}

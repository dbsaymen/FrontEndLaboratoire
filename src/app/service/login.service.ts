import {Injectable} from '@angular/core';
import {MembreReturn} from '../models/MembreReturn';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Etudiant} from '../models/Etudiant';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UserInfo: MembreReturn = null;

  constructor(private http: HttpClient,private router: Router) {
  }

  TryLogin(email: String, password: String): Observable<MembreReturn> {
    let httpParams = new HttpParams()
      .append('email', ''+email);

    let head = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });

    console.log(head);
    return this.http.get<MembreReturn>(environment.baseUrl + '/members/login', {
      headers: head,
      params: httpParams
    });
  }
  LogOut(){
    this.UserInfo=null;
  }
  LogIn(email: String, password: String) {
    this.TryLogin(email, password).subscribe((data: MembreReturn) => {
      this.UserInfo = data;
      this.router.navigate(['/user']);
    }
    ,err=>{
      console.log("Faild To Login")
      }
    );
  }
  isLoggedin():boolean{
    if(this.UserInfo==null) return false;
    return true;
  }
  getUserInfo():MembreReturn{
    return this.UserInfo;
  }
}

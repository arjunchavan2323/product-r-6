import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iuserDetail, iusersignupform } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
Auth_baseurl:string=environment.base_url
  constructor(private _http :HttpClient) { }

  LogInform(userDetail:iuserDetail):Observable<any>{
    let logindetail=`${this.Auth_baseurl}/api/auth/login`
   return this._http.post(logindetail, userDetail)
  }

  Signupform(usersignupform:iusersignupform):Observable<any>{
     let signupdetail=`${this.Auth_baseurl}/api/auth/register`
     return this._http.post(signupdetail, usersignupform)
  }

  saveToken(token:string){
    localStorage.setItem('token', token)
  }
  saveuserole(userRole:string){
  localStorage.setItem('userRole', userRole)
  }

  gettoken():string | null{
   return localStorage.getItem('token')
  }
  getuserole():string | null{
 return  localStorage.getItem('userRole')
  }

  logout():Observable<any>{
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    return of({
      msg:'the User  logout are succefully'
    })
  }


}

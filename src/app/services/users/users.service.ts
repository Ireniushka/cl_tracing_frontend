import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  apiUrl = 'http://scout.allsites.es/public/api'; 
  token: any;

  constructor(private http: HttpClient) { }
  
  getUsers(tok: any) {
    return new Promise(resolve => { 
      this.http.get(this.apiUrl + '/users', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => { 
        resolve(data);
      }, err => { 
          console.log(err);
      });
    });
  }

  createUser(dni:string, type:string, name:string, last_name:string,tok: any) {
    return new Promise(resolve => { 
      this.http.post(this.apiUrl + '/users', {

      },{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
      .subscribe(data => { 
        resolve(data);
      }, err => { 
          console.log(err);
      });
    });
  }


  




}

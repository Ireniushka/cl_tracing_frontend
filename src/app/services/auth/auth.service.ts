import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://scout.allsites.es/api';
  dataUser:any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return new Promise(resolve => { 
      this.http.post(this.apiUrl + '/login',
      {
        username: username, 
        password: password,
      })
      .subscribe(data => { 
        this.dataUser = data; 
        resolve(data);
      }, err => { 
        console.log(err);
      });
    });
  }


  logout(){
   this.dataUser = null;
  }
  
}

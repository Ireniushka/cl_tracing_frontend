import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, ViewChild, ViewRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = 'http://scout.allsites.es/public/api';
  
  dataUser:any;
  
  token:any;

  constructor(private http: HttpClient) { }

  setData(data:any){
    this.dataUser = data;
    this.token = data.success.remember_token;
  }

  login(username: string, password: string) {
    return new Promise(resolve => { 
      this.http.post(this.apiUrl + '/login',
      {
        username: username, 
        password: password,
      })
      .subscribe(data => { 
        this.setData(data);     
        resolve(data);
      }, err => { 
        console.log(err);
      });
    });
  }


  logout(){
   this.dataUser = null;
   this.token = null;
  }
  
}

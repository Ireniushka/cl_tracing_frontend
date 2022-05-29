import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }
  

  getAllUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);
      });
      });
  }

  getUserData($id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users/' + $id,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);
      });
      });
  }

  deleteUser($id){
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/users/' + $id,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);
      });
      });
  }

  createUser(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/users',
      {
      dni: data.dni,
      type: data.type,
      name: data.name,
      last_name: data.last_name,
      username: data.username,
      password: data.password,
      passChanged: data.c_password,
      },{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);

      });
      });
  }

  updateUser(data: any){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/users',
      {
      dni: data.dni,
      type: data.type,
      name: data.name,
      last_name: data.last_name,
      username: data.username,
      password: data.password,
      passChanged: data.c_password,
      },{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);

      });
      });
  }

  updateLastName($last_name){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/users/' + this.LoginService.dataUser.success.id,
      {
        last_name: $last_name
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
        resolve(data);
        }, err => {
          console.log(err);
        });
        });
  }

  updatePass($pass){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/users/' + this.LoginService.dataUser.success.id,
      {
        password: $pass
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
        resolve(data);
        }, err => {
          console.log(err);
        });
        });
  }
}

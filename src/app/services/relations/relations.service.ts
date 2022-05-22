import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RelationsService {

  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }

  getAllRelations() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/relations',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      console.log(data);
      }, err => {
        console.log(err);
      });
      });
  }

  getPupils($id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/relations',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      console.log(data);
      }, err => {
        console.log(err);
      });
      });
  }

  getRelation($id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/relations/' + $id,
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

  createRelation(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/relations',
      {
        pupil_id: data.pupil_id,
        user_id: data.user_id,
        // created_at? o se hace solo?
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

  updateRelation(data: any, $id){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/relations/' + $id,
      {
      pupil_id: data.pupil_id,
      user_id: data.user_id,
      // updated_at? o se hace solo?
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

  deleteRelation($id){
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/relations/' + $id,
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

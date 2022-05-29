import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }
  

  getAllActs(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/activities',
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

  getActivityData($id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/activities/' + $id,
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

  deleteActivity($id){
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/activities/' + $id,
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

  createAtivity(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/activities',
      {
        name: data.name,
        url: data.url,
        url_type: data.url_type,
        file_type: data.file_type,
        enunciation: data.enunciation,
        description: data.description,
        materials: data.materials
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

  updateActivity(data: any, $id){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/activities/' + $id,
      {
        name: data.name,
        url: data.url,
        url_type: data.url_type,
        file_type: data.file_type,
        enunciation: data.enunciation,
        description: data.description,
        materials: data.materials
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

}

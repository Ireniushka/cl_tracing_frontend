import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TracingActivitiesService {

  
  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }
  

  getAllTracings(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/tracking_acts',
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

  getTracingData($id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/tracking_acts/' + $id,
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

  deleteTracing($id){
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/tracking_acts/' + $id,
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

  createTracing(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/tracking_acts',
      {
        pupil_id: data.pupil_id,
        activity_id: data.activity_id,
        comment: data.comment
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

  updateTracing(data: any, $id){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/tracking_acts/' + $id,
      {
        pupil_id: data.pupil_id,
        activity_id: data.activity_id,
        comment: data.comment
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

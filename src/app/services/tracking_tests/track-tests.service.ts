import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrackTestsService {

  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }
  

  getAllTracings(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/tracking_tests',
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
      this.http.get(this.apiUrl + '/tracking_tests/' + $id,
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
      this.http.delete(this.apiUrl + '/tracking_tests/' + $id,
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
      this.http.post(this.apiUrl + '/tracking_tests',
      {
        pupil_id: data.pupil_id,
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
      this.http.put(this.apiUrl + '/tracking_tests/' + $id,
      {
        pupil_id: data.pupil_id,
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

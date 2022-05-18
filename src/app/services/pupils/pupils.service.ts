import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  apiUrl = 'http://scout.allsites.es/public/api';   

  constructor(private http: HttpClient, private LoginService: AuthService) { }

  getAllPupils(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/pupils',
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

  getPupil($id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/pupils/' + $id,
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

  createPupil(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/pupils',
      {
      dni: data.dni,
      name: data.name,
      last_name: data.last_name,
      course: data.course
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

  updatePupil(data: any, $id){
    return new Promise(resolve => {
      this.http.put(this.apiUrl + '/pupils/' + $id,
      {
      dni: data.dni,
      name: data.name,
      last_name: data.last_name,
      course: data.course
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

  deletePupil($id){
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/pupils/' + $id,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.LoginService.token),
      })
      .subscribe(data => {
      resolve(data);
      // this.navCtrl.navigateRoot('/tabs');
      }, err => {
        console.log(err);
      });
      });
  }
}

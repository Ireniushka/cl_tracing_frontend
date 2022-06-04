import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-tutor',
  templateUrl: './data-tutor.page.html',
  styleUrls: ['./data-tutor.page.scss'],
})
export class DataTutorPage implements OnInit {
  tutor = {name: "", last_name: "", dni: "",  username: "",password:"", email: "", passChanged: false }
  tutorId: any;

  boolPupil: Boolean;
  onePupil: Boolean;
  manyPupils: Boolean;

  pupils: any;

 constructor(private tutorService: UsersService, private navCtrl: NavController, private activatedRoute: ActivatedRoute) {
   this.hasPupil();
  }


 ngOnInit() {
  this.tutorId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  this.getTutor(this.tutorId);

  }


 modifyTutor(){
  this.navCtrl.navigateRoot('update-tutor/'+ this.tutorId);
  }

 setTutor(data: any){
   this.tutor = data.User;
   console.log('tutor',this.tutor)
 }

 getTutor(id: any){
   this.tutorService.getUserData(id).then(data=>{this.setTutor(data)});
 }

 hasPupil(){
   //mejorar rest
   this.boolPupil = false;
   this.onePupil = false;
   this.manyPupils = false;
 }
}

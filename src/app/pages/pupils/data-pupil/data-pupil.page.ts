import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PupilsService } from 'src/app/services/pupils/pupils.service';
import { ActivatedRoute } from '@angular/router';
import { UpdatePupilPageModule } from '../update-pupil/update-pupil.module';

@Component({
  selector: 'app-data-pupil',
  templateUrl: './data-pupil.page.html',
  styleUrls: ['./data-pupil.page.scss'],
})
export class DataPupilPage implements OnInit {
  pupilId:any;
  pupil = {name: "", dni:"", course:"", last_name:""}

  boolTutor: Boolean;
  oneTutor: Boolean;
  manyTutors: Boolean;

  tutors: any;

  constructor(private pupilsService: PupilsService, private navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    this.hasTutor();
  }
 
  ngOnInit() {
    this.pupilId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.pupilId);
    this.getPupil(this.pupilId);
  }

  modifyPupil(){
    this.navCtrl.navigateRoot('update-pupil/'+ this.pupilId);
  }

  setPupil(data: any){
    this.pupil = data.Pupil;
    console.log(this.pupil)
  }

  getPupil($id: any){
    this.pupilsService.getPupil($id).then(data=>{this.setPupil(data)});
  }

  hasTutor(){
    //mejorar rest
    this.boolTutor = false;
    this.oneTutor = false;
    this.manyTutors = false;
  }
}

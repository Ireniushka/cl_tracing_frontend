import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PupilsService } from 'src/app/services/pupils/pupils.service';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.page.html',
  styleUrls: ['./pupils.page.scss'],
})
export class PupilsPage implements OnInit {
  pupils: any;
  pupil: any;

  constructor(private pupilsService: PupilsService, private navCtrl: NavController) {
    this.getPupils();
  }

  ngOnInit() {
    
  }

  setPupils(data: any){
    this.pupils = data.Pupils;
  }

  getPupils(){
    this.pupilsService.getAllPupils().then(data=>{this.setPupils(data)});
  }


  setPupil(data: any){
    this.pupil = data.Pupil;
  }

  getPupil(id: any){
    this.pupilsService.getPupil(id).then(data=>{this.setPupil(data)});
  }

  deletePupil(id){
    this.pupilsService.deletePupil(id).then
  }

  createPupil(){
    this.navCtrl.navigateRoot('create-pupil');
  }

  doRefresh(event) {
    this.getPupils();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  go($event){
    console.log(this.pupil);
    switch($event.detail.value){
      case "test" : 
        this.navCtrl.navigateRoot('home');
        break;
      case "ejercicio" : 
        this.navCtrl.navigateRoot('home');
        break;
      case "datos" : 
        this.navCtrl.navigateRoot('data-pupil');
        break;
      case "eliminar" : 
        this.deletePupil(this.pupil.id);
        break;
    }
  }
}

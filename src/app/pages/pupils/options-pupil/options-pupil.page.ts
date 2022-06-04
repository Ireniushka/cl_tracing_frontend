import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../../../services/pupils/pupils.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-options-pupil',
  templateUrl: './options-pupil.page.html',
  styleUrls: ['./options-pupil.page.scss'],
})
export class OptionsPupilPage implements OnInit {
  pupils: any;
  pupil: any;

  constructor(private pupilsService: PupilsService, private navCtrl: NavController, public alertController: AlertController) {
    this.getPupils();
  }

  ngOnInit() {
    
  }

  setPupils($data: any){
    this.pupils = $data.Pupils;
  }

  getPupils(){
    this.pupilsService.getAllPupils().then(data=>{this.setPupils(data)});
  }


  setPupil($data: any){
    this.pupil = $data.Pupil;
  }

  getPupil($id: any){
    this.pupilsService.getPupil($id).then(data=>{this.setPupil(data)});
  }

  deletePupil($id: any){
    this.pupilsService.deletePupil($id);
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
    console.log(this.pupil.id);
    switch($event.detail.value){
      case "test" : 
        this.navCtrl.navigateRoot('do-test');
        break;
      case "seg-test" : 
        this.navCtrl.navigateRoot('new-tracing-test/'+ this.pupil.id);
        break;
      case "seg-ejercicio" : 
        this.navCtrl.navigateRoot('new-tracing-act/'+ this.pupil.id);
        break;
      case "datos" : 
        this.navCtrl.navigateRoot('data-pupil/'+ this.pupil.id);
        break;
      case "seguimiento" : 
        this.navCtrl.navigateRoot('tracings/'+ this.pupil.id);
        break;
      case "eliminar" : 
        this.presentAlertConfirm();
        break;
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Cuidado!',
      message: '¿Está seguro que desea eliminarlo?',
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.deletePupil(this.pupil.id);
            this.getPupils();
            location.reload();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
}

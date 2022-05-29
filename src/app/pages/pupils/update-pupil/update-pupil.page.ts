import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PupilsService } from '../../../services/pupils/pupils.service';

@Component({
  selector: 'app-update-pupil',
  templateUrl: './update-pupil.page.html',
  styleUrls: ['./update-pupil.page.scss'],
})
export class UpdatePupilPage implements OnInit {
  pupilId:any;
  pupil = {id: 0, name: "", dni:"", course:"", last_name:""}

  boolTutor: Boolean;
  oneTutor: Boolean;
  manyTutors: Boolean;

  tutors: any;
  
  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, 
    private pupilService: PupilsService, private navCrl: NavController) {
    this.hasTutor();
   }

  ngOnInit() {
    this.pupilId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPupil(this.pupilId);
  }

  setPupil(data: any){
    this.pupil = data.Pupil;
  }

  getPupil(id: any){
    this.pupilService.getPupil(id).then(data=>{this.setPupil(data)});
  }

  hasTutor(){
    //mejorar rest
    this.boolTutor = false;
    this.oneTutor = false;
    this.manyTutors = false;
  }

  async deleteTutor() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: '¿Qué desea?',
      buttons: [
        {
          text: 'Eliminar la relacion con dicho alumno',
          id: 'confirm-button',
          handler: () => {
            this.confirmDeleteParcial();
          }
        },
        {
          text: 'Eliminar por completo el tutor',
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
            this.confirmDeleteTotal();
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmDeleteParcial() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:'¡Cuidado!',
      message: '¿Está seguro de eliminar la relación?',
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: () => {
            console.log('eliminar relacion');
            // relationService.delete
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

  async confirmDeleteTotal() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      message: '¿Qué desea?',
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: () => {
            console.log('eliminar tutor');
            // userService.delete
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

  submitUpdate(){
    this.pupilService.updatePupil(this.pupil, this.pupilId);
    this.navCrl.navigateRoot('data-pupil/'+ this.pupilId);
  }
}

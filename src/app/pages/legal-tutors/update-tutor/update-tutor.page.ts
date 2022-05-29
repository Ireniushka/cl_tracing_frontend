import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-update-tutor',
  templateUrl: './update-tutor.page.html',
  styleUrls: ['./update-tutor.page.scss'],
})
export class UpdateTutorPage implements OnInit {
  tutor = {name: "", last_name: "", dni: "",  username: "",password:"", email: "", passChanged: false }
  tutorId: any;

  boolPupil: Boolean;
  onePupil: Boolean;
  manyPupils: Boolean;

  pupils: any;
  
  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, 
    private tutorService: UsersService, private navCrl: NavController) {
    this.hasPupil();
   }

  ngOnInit() {
    this.tutorId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getTutor(this.tutorId);
  }

  setTutor(data: any){
    this.tutor = data.User;
    console.log(this.tutor)
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

  async deletePupil() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: '¿Qué desea?',
      buttons: [
        {
          text: 'Eliminar la relacion con dicho tutor',
          id: 'confirm-button',
          handler: () => {
            this.confirmDeleteParcial();
          }
        },
        {
          text: 'Eliminar por completo el alumno',
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
            // pupilService.delete
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
    this.tutorService.updateUser(this.tutor, this.tutorId);
    this.navCrl.navigateRoot('data-pupil/'+ this.tutorId);
  }
}

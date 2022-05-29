import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-options-tutors',
  templateUrl: './options-tutors.page.html',
  styleUrls: ['./options-tutors.page.scss'],
})
export class OptionsTutorsPage implements OnInit {
  tutors: any;
  tutor: any;

  constructor(private tutorsService: UsersService, private navCtrl: NavController, private alertController: AlertController) {
    this.getTutors();
  }

  ngOnInit() {
    
  }

  setTutors(data: any){
    this.tutors = data.Users.filter((user) => user.type == "legal_tutor");
  }

  getTutors(){
    this.tutorsService.getAllUsers().then(data=>{this.setTutors(data)});
  }


  setTutor(data: any){
    this.tutor = data.Pupil;
  }

  getTutor(id: any){
    this.tutorsService.getUserData(id).then(data=>{this.setTutor(data)});
  }

  deleteTutor(id){
    this.tutorsService.deleteUser(id)
  }

  createTutor(){
    this.navCtrl.navigateRoot('create-tutor');
  }

  doRefresh(event) {
    this.getTutors();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  go($event){
    console.log(this.tutor);
    switch($event.detail.value){
      case "datos" : 
        this.navCtrl.navigateRoot('home');
        break;
      case "eliminar" : 
        this.navCtrl.navigateRoot('home');
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
            this.deleteTutor(this.tutor.id);
            this.getTutors();
            location.reload();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Cancela');
          }
        }
      ]
    });

    await alert.present();
  }
}

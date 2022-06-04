import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../services/activities/activities.service';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../../../services/auth/auth.service';
import { DocumentViewer } from '@ionic-native/document-viewer';

@Component({
  selector: 'app-options-acts',
  templateUrl: './options-acts.page.html',
  styleUrls: ['./options-acts.page.scss'],
})
export class OptionsActsPage implements OnInit {
  activities: any;
  user: any;

  constructor(private actService: ActivitiesService, private alertController: AlertController, 
    private authService: AuthService, private navCtrl: NavController, private document: DocumentViewer) { 
    this.getActivities();
  }

  ngOnInit() {
    this.user = this.authService.dataUser
  }

  setActivities($data:any){
    this.activities = $data.Activities;
    console.log("actividades", this.activities);
  }

  getActivities(){
    this.actService.getAllActs().then(data => this.setActivities(data));
  }

  updateActivity($id){
    this.navCtrl.navigateRoot('update-act' + $id);
  }

  // createActivity(){
  //   this.navCtrl.navigateRoot('new-act');
  // }

  doRefresh(event) {
    this.getActivities();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async confirmDelete($id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Cuidado!',
      message: '¿Está seguro que desea eliminarlo?',
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay', $id);
            //this.actService.deleteActivity(id);
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

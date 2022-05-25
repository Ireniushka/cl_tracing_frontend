import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  user:any 

  constructor(private authService: AuthService, private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit() {
    this.user = this.authService.dataUser
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('login');
    
  }

  async presentAlertEmail() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Introduzca el nuevo e-mail',
      inputs: [
        {
          name: 'E-mail: ',
          type: 'text',
          id: 'newEmail'
        }
      ],
      buttons: [
        {
          text: 'Cambiar',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            //changeEmail()
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Cancela');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPassword() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Comprobemos',
      message: 'Primero introduzca su contraseña actual',
      inputs: [
        {
          name: 'old-pass',
          type: 'text',
          id: 'old-pass'
        }
      ],
      buttons: [
        {
          text: 'Comprobar',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            //testPass()--> presentAlertPassword2 / 3()
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Cancela');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPassword2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña correcta',
      message: 'Indique la nueva contraseña',
      inputs: [
        {
          name: 'new-pass',
          type: 'text',
          id: 'new-pass'
        }
      ],
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            location.reload();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Cancela');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPassword3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña incorrecta',
      message: 'Si no introduce la contraseña correcta no será posible el cambio',
      buttons: ['OK'
        // {
        //   text: 'OK',
        //   id: 'confirm-button',
        //   handler: () => {
        //     console.log('Confirm Okay');
        //   }
        // }
      ]
    });

    await alert.present();
  }

}

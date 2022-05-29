import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  user:any 

  constructor(private authService: AuthService, private navCtrl: NavController, private alertController: AlertController, private userService: UsersService) { }

  ngOnInit() {
    this.user = this.authService.dataUser
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('login');
    
  }

  testPass($pass){
    if (this.user.success.password == $pass) {
      this.presentAlertPasswordGood();
    }else {
      this.presentAlertPasswordBad();
    }
  }


  async presentAlertEmail() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Introduzca el nuevo e-mail',
      inputs: [
        {
          name: 'email: ',
          type: 'email',
        }
      ],
      buttons: [
        {
          text: 'Cambiar',
          id: 'confirm-button',
          cssClass: 'secondary',
          handler: (alertData) => {
            this.userService.updateLastName(alertData.email)
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

  async presentAlertPassword() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Comprobemos',
      message: 'Primero introduzca su contraseña actual',
      inputs: [{
          name: 'oldPass',
          type: 'text',
      }],
      buttons: [
        {
          text: 'Comprobar',
          id: 'confirm-button',
          handler: (alertData) => {
            console.log('Confirm Okay');
            this.testPass(alertData.oldPass);
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

  async presentAlertPasswordGood() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña correcta',
      message: 'Indique la nueva contraseña',
      inputs: [
        {
          name: 'newPass',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Estoy seguro',
          id: 'confirm-button',
          handler: (alertData) => {
            console.log('Confirm Okay');
            this.userService.updatePass(alertData.newPass);
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

  async presentAlertPasswordBad() {
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

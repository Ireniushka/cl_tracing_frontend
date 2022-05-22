import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppModule } from '../../app.module';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private navCtrl: NavController, private app: AppComponent) { }

  ngOnInit() {
    this.app.enableMenus()
  }
  
  submitLogin() {
    this.authService.login(this.username, this.password).then(data => {
      console.log(data);
      //this.navegar();
      this.navCtrl.navigateRoot('home');
      this.app.controlUserType()
    }).catch(err => alert('Lo sentimos, los datos introducidos son erróneos'));
  }

  navegar(){
    if(this.authService.dataUser.success.tipo == "educando")
      
      this.navCtrl.navigateRoot('home');
    else
      this.navCtrl.navigateRoot('home');
  }
}

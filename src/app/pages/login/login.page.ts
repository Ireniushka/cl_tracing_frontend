import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  submitLogin() {
    this.authService.login(this.username, this.password).then(data => {
      console.log(data);
      //this.navegar();
      this.navCtrl.navigateRoot('home');
    }).catch(err => alert('Lo sentimos, los datos introducidos son erróneos'));
  }

  navegar(){
    if(this.authService.dataUser.success.tipo == "educando")
      
      this.navCtrl.navigateRoot('home');
    else
      this.navCtrl.navigateRoot('home');
  }
}

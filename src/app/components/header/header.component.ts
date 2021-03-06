import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {}

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('login');
    
  }
}

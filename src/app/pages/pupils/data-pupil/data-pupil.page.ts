import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PupilsService } from 'src/app/services/pupils/pupils.service';

@Component({
  selector: 'app-data-pupil',
  templateUrl: './data-pupil.page.html',
  styleUrls: ['./data-pupil.page.scss'],
})
export class DataPupilPage implements OnInit {
  

  constructor(private pupilsService: PupilsService, private navCtrl: NavController) { }

  ngOnInit() {
  }


  modifyPupil(){

  }
}

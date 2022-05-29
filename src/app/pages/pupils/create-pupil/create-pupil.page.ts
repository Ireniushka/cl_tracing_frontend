import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../../../services/pupils/pupils.service';

@Component({
  selector: 'app-create-pupil',
  templateUrl: './create-pupil.page.html',
  styleUrls: ['./create-pupil.page.scss'],
})
export class CreatePupilPage implements OnInit {
  name: string;
  lastname: string;
  dni: string;
  course: string;

  constructor(private pupilsService: PupilsService) { }

  ngOnInit() {
  }

  submitCreate(){
    this.pupilsService.createPupil({
      name: this.name,
      last_name: this.lastname,
      dni: this.dni,
      course: this.course
    });
  }

}

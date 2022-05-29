import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.page.html',
  styleUrls: ['./create-tutor.page.scss'],
})
export class CreateTutorPage implements OnInit {
  name: string;
  lastname: string;
  dni: string;
  username: string;
  email: string;

  constructor(private tutorService: UsersService) { }

  ngOnInit() {
  }

  submitCreate(){
    this.tutorService.createUser({
      name: this.name,
      last_name: this.lastname,
      dni: this.dni,
      type: "legal_tutor",
      username: this.username,
      password: "1234",
      email: this.email,
      passChanged: false
    });
  }

}

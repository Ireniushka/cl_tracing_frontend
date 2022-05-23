import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth/auth.service';
import { PupilsService } from './services/pupils/pupils.service';
import { RelationsService } from './services/relations/relations.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  name: String
  email: String

  public counselorPages = [
    { title: 'Mi perfil', url: 'my-profile', icon: 'person' },
    { title: 'Alumnos', url: 'options-pupils', icon: 'people-circle' },
    { title: 'Tutores legales', url: 'options-tutors', icon: 'people-circle' },
    { title: 'Ejercicios', url: 'options-acts', icon: 'document-attach' },
    { title: 'Tests', url: 'options-test', icon: 'document-text' },
  ];

  public tutorPages = [
    { title: 'Mi perfil', url: 'my-profile', icon: 'person' },
    { title: 'Ejercicios', url: 'options-acts', icon: 'document-attach' }
  ];

  public pupilArray = []

  constructor(private menu: MenuController, private authService: AuthService, private pupilService: PupilsService, private relationsService: RelationsService) {}

  ngOnInit() {
  }

  enableMenus(){
    this.menu.enable(false);
  }
  
  controlUserType(){
    this.name = this.authService.dataUser.success.name
    this.email = this.authService.dataUser.success.email

    if(this.authService.dataUser.success.type == "counselor"){
      this.menu.enable(true, 'counselor-menu');
    }else{
      this.getRelations()
      this.menu.enable(true, 'tutor-menu');
    }
  }

  getRelations(){
    this.relationsService.getAllRelations().then(res => {
      this.getPupils(res);
    });
  }

  getPupils(data: any){
    let relations = data.relations.filter((relation) => relation.user_id == this.authService.dataUser.success.id)

    for(let index in relations){
      this.pupilService.getPupil(relations[index].pupil_id).then(dataPupil => {
        this.fillPupilArray(dataPupil);
      });
    }
    
  
  }

  fillPupilArray(dataPupil: any){
    this.pupilArray.push({name: dataPupil.Pupil.name, pupil_id: dataPupil.Pupil.id, url: 'tracing-pupil/:id', icon: 'person'})
    console.log(this.pupilArray)
  }

}

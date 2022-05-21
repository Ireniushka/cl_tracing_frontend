import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public counselorPages = [
    { title: 'Mi perfil', url: '/folder/Inbox', icon: 'person' },
    { title: 'Alumnos', url: 'pupils', icon: 'people-circle' },
    { title: 'Tutores legales', url: '/folder/Favorites', icon: 'people-circle' },
    { title: 'Ejercicios', url: '/folder/Archived', icon: 'document-attach' },
    { title: 'Tests', url: '/folder/Trash', icon: 'document-text' },
  ];

  public tutorPages = [
    { title: 'Mi perfil', url: '/folder/Inbox', icon: 'person' },
    { title: 'Ejercicios', url: '/folder/Inbox', icon: 'document-attach' }
  ];

  public pupilArray = [
    {name: "Marta", pupil_id: 2, url: '/folder/Trash', icon: 'person'},
    {name: "Pepito", pupil_id: 9, url: '/folder/Trash', icon: 'person'},
  ]

  constructor(private menu: MenuController) {}

  ngOnInit() {
    //this.menu.enable(false);
  }

  enableMenus(){
    this.menu.enable(false);
  }
  
  controlUserType(){
    this.menu.enable(true, 'tutor-menu');
    //this.menu.enable(false, 'counselor-menu');
  }
}

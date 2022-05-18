import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Mi perfil', url: '/folder/Inbox', icon: 'person' },
    { title: 'Alumnos', url: 'pupils', icon: 'people-circle' },
    { title: 'Tutores', url: '/folder/Favorites', icon: 'people-circle' },
    { title: 'Ejercicios', url: '/folder/Archived', icon: 'document-attach' },
    { title: 'Tests', url: '/folder/Trash', icon: 'document-text' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

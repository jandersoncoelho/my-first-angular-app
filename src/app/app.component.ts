import { Component } from '@angular/core';

import { DUMMY_USERS } from './components/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'Quadro de Tarefas';
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)  ;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

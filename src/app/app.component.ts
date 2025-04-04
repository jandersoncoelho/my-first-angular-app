import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './components/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'Quadro de Tarefas';

  onSelectUser(id: string) {
    console.log('User selected with id: ', id);
  }
}

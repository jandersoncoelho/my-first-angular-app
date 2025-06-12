/**
 * O principal módulo raiz do aplicativo Angular.
 *
 * Este módulo é responsável por iniciar o aplicativo e importar
 * outros módulos necessários.
 *
 * A propriedade `declarations` lista os componentes, diretivas e pipes que pertencem a este módulo.
 */
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { SharedModule } from './shared/shared-module';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}

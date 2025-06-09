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

import { HeaderComponent } from './components/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent, TaskComponent, CardComponent],
})

export class AppModule { }

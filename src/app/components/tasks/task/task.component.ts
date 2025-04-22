import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './task.model'; // Corrected import path

// The TaskComponent is a standalone component that displays task details
// It uses the Task interface to define the structure of the task data

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
completeTask() {
throw new Error('Method not implemented.');
}
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}

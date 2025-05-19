import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component"; // Corrected import path

// The TaskComponent is a standalone component that displays task details
// It uses the Task interface to define the structure of the task data

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}

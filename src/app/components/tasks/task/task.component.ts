import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { CardComponent } from '../../../shared/card/card.component'; // Corrected import path
import { TasksService } from '../tasks.service';

// The TaskComponent is a standalone component that displays task details
// It uses the Task interface to define the structure of the task data

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TasksService); // Injecting the TasksService

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}

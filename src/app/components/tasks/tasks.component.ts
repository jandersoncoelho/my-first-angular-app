import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

// import { Task } from './task/task.model';
// The TaskComponent is a standalone component that displays task details

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false; // Flag to control the visibility of the task form
  // @Input( {required: true} ) summary!: string;
  // @Input( {required: true} ) dueDate!: string;
  // @Output() addTask = new EventEmitter<Task>();
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  // private nextTaskId = 1;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(`Task with ID ${taskId} completed and removed from the list.`);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onSaveTask() {
    console.log('Save button clicked in NewTaskComponent');
  }

  // onAddTask() {
  //   const todayDate = new Date();
  //   const newTask: Task = {
  //     id: 't' + this.nextTaskId++,
  //     userId: this.userId,
  //     title: 'Nova Tarefa',
  //     summary: 'Inserir nova tarefa',
  //     dueDate: todayDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
  //     };
  //   this.tasks.push(newTask);
  //   this.addTask.emit(newTask);
  //   console.log(`New task added: ${JSON.stringify(newTask)}`);
  // }
}

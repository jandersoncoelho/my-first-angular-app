import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  // Sample task data for demonstration purposes
  private tasks = [
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

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newTask = {
      id: `t${this.tasks.length + 1}`, // Generate a new ID based on the current length of the tasks array
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    };
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(`Task with ID ${id} completed and removed from the list.`);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

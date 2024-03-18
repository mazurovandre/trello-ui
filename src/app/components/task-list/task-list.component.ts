import { Component } from '@angular/core';
import { ITask, TaskStatus } from "../task/task.interface";
import { NgForOf } from "@angular/common";
import { TaskComponent } from "../task/task.component";
import { MatGridList, MatGridTile, MatGridTileText } from "@angular/material/grid-list";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    MatGridList,
    MatGridTile,
    MatGridTileText,
    AddTaskComponent
  ],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  private tasks: ITask[] = [
    {
      id: 1,
      title: '111',
      description: '222',
      status: TaskStatus.New,
    },
    {
      id: 2,
      title: '222',
      description: '1231231',
      status: TaskStatus.New,
    },
    {
      id: 3,
      title: '333',
      description: '',
      status: TaskStatus.Done,
    }
  ];

  newTasks = this.tasks.filter(task => task.status === TaskStatus.New);
  doneTasks = this.tasks.filter(task => task.status === TaskStatus.Done);
}

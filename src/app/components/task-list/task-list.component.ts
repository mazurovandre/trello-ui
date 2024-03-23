import { Component, OnInit } from '@angular/core';
import { ITask, TaskStatus } from "../task/task.interface";
import { NgForOf } from "@angular/common";
import { MatGridList, MatGridTile, MatGridTileText } from "@angular/material/grid-list";
import { TaskComponent } from "../task/task.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { TaskListService } from "./task-list.service";

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
  providers: [TaskListService],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  constructor(private taskListService: TaskListService) {}

  private tasks: ITask[] = [];

  get newTasks() {
    return this.tasks.filter(task => task.status === TaskStatus.New);
  }

  get doneTasks() {
    return this.tasks.filter(task => task.status === TaskStatus.Done);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskListService.getTasks()
      .subscribe(response => {
        this.tasks = response;
      })
  }

  addTask(task: ITask) {
    console.log('???', task)
    this.tasks.push(task);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, UpperCasePipe } from "@angular/common";
import { TaskComponent } from "./components/task/task.component";
import { ITask, TaskStatus } from "./components/task/task.interface";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, TaskComponent, NgForOf, TaskListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

}

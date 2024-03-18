import { Component, Input } from "@angular/core";
import { ITask } from "./task.interface";

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
})

export class TaskComponent {
  @Input() item!: ITask;
}

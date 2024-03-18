import { Component, Input } from "@angular/core";
import { ITask } from "./task.interface";
import { MatIcon } from "@angular/material/icon";
import { NgIf } from "@angular/common";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  imports: [
    MatIcon,
    NgIf,
    MatIconButton
  ]
})

export class TaskComponent {
  @Input() item!: ITask;
}

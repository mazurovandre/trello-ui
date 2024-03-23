import { Injectable } from "@angular/core";
import { AddTask } from "./add-task.interface";
import { ITask } from "../task/task.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AddTaskService {
  constructor(private http: HttpClient) {}

  addTask(data: AddTask) {
    return this.http.post<ITask>('/api/task', data);
  }
}

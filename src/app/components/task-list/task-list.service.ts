import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITask } from "../task/task.interface";

@Injectable()
export class TaskListService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<ITask[]>('/api/task');
  }
}

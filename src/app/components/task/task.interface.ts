export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  New = 'new',
  Done = 'done',
}

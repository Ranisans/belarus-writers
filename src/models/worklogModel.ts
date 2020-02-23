export interface TaskModel {
  title: string;
  hours: number;
}

export interface WorklogModel {
  name: string;
  worklog: TaskModel[];
}

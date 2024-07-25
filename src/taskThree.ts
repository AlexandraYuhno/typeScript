// Tags: Generic, Union

class Queue<T> {
  public tasks: T[] = [];

  private delay:number = 10;

  private runQueue():void {
    setTimeout(() => this.doJob(), this.delay);
  }

  private doJob():void {
    const task = this.tasks.shift();
    if (task != null) {
      console.log(task);
    }
    this.runQueue();
  }

  public addJob(task:T): number{
    return this.tasks.push(task);
  }

  public run():void {
    this.runQueue();
  }

  public set jobDelay(time:number){
    this.delay = time;
    }
}

type TaskValue = string | number;

class Task<K> {
  value: K;
  constructor(value: K) {
    this.value = value;
  }
}

const queue = new Queue<Task<TaskValue>>();
const task1 = new Task<string>('task#1');
const task2 = new Task<number>(1);

queue.jobDelay = 1000;
queue.addJob(task1);
queue.addJob(task2);

queue.run();

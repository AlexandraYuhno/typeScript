// Tags: Generic, Union

class Queue<T> {
  public tasks: T[] = [];

  private delay:number = 10;

  runQueue():void {
    setTimeout(() => this.doJob(), this.delay);
  }

  doJob():void {
    const task = this.tasks.shift();
    if (task != null) {
      console.log(task);
    }
    this.runQueue();
  }

  addJob(task:T): number{
    return this.tasks.push(task);
  }

  run():void {
    this.runQueue();
  }

  set jobDelay(time:number){
    this.delay = time;
    }
}

class Task<K = string | number> {
  value: K;

  constructor(value: K) {
    this.value = value;
  }
}

const queue = new Queue<Task>();
const task1 = new Task<string>('task#1');
const task2 = new Task<number>(1);

queue.jobDelay = 1000;
queue.addJob(task1);
queue.addJob(task2);

queue.run();

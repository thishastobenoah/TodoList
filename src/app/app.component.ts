import { Component } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';


  task1:Todo = {task:"Vacuum", completed:false}
  task2:Todo = {task:"Sweep", completed:false}
  task3:Todo = {task:"Mop", completed:false}

  todoList:Todo[] = [this.task1, this.task2, this.task3];

  addFromChild(todo:Todo){
    this.todoList.push(todo);
  }

  removeTask(todo:Todo):void{
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

}

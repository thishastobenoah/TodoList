import { Component, Input } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todoDisplay: Todo = {task:"", completed:false}

  completeTask ():void{
    this.todoDisplay.completed = true;
  }
}
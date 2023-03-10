import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  newTodo:Todo =  {task:"", completed:false}
  
  addTask():void{
    
    this.newTodoEvent.emit(this.newTodo);
  }
}
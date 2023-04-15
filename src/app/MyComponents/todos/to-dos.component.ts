import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  localItem: any;
  todos:Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos=[]
    }
    else{
      this.todos= JSON.parse(this.localItem);
    }
    
  }
  ngOnInit(): void{}

  deleteTodo(todos: Todo){
    console.log(todos);
    const index = this.todos.indexOf(todos);
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todos: Todo){
    console.log(todos);
    this.todos.push(todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todos: Todo){
    const index = this.todos.indexOf(todos);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}

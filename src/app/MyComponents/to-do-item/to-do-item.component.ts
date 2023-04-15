import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit{
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter;
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter;
  constructor() {}
  ngOnInit(): void{}

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("On click has een triggered");
  }
  onCheckboxCick(todo: Todo){
    this.todoCheckBox.emit(todo);
  }
}

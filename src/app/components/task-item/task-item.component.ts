import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Output() onDelete = new EventEmitter()
  @Output() onToggle = new EventEmitter()
  @Input() task! : Task; 
  faTimes = faTimes;
  

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(task: Task) {
    this.onDelete.emit(task)
  }

  toggleReminder(task : Task) {
    this.onToggle.emit(task)
  }
}

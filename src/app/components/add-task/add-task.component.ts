import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text : string = "";
  day : string = "";
  reminder : boolean = false;
  @Output() customSubmit: EventEmitter<Task> = new EventEmitter();
  showAddTask! : boolean;
  subscription! : Subscription;


  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('please Add a Task');
      return;
    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.customSubmit.emit(newTask)


    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: String = "";
  showAddTask! : boolean;
  subsciption! : Subscription;

  constructor(private uiService : UiService, private router:Router) { 
    this.subsciption = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onCLick() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route : string) {
      return this.router.url === route;
  }
}

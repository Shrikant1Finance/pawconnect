import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PawConnect';
  currentRoute: string = '';

  constructor(private router: Router) {
    // Get the current route
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}

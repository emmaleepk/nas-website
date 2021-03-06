import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <!-- <a href="https://www.flaticon.com/authors/srip" title="srip">-->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'nas-website';

}

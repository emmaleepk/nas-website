import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

// [] - property binding: get data from a class into template
// () - event binding: listen for events on the template
//      and pass data form the template into the class
// *  - structural directive: update html based on variables

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url"/>
          <h2>{{ user.login }}</h2>
        </div>

      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  user: any;

  // Constructor sets up and injects what the component needs
  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { } 

  ngOnInit(): void {
    // Grab username out of the  url
    this.route.params.subscribe(params => {
      const username = params['username']

      // Use the username to get data from the api
      this.userService
      .getUser(username)
      .subscribe(user => {
        // bind that to a user variable
        this.user = user;
      })
    });
   }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us!</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form>
          <!-- name -->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input">
          </div>
          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
            <input type="text" name="email" class="input">
          </div>
          <!-- message -->
          <div class="field">
            <label class="label">Message</label>
            <input type="text" name="message" class="input">
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // create api call here
  }

}

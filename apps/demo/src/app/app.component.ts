import { Component } from '@angular/core';

@Component({
  selector: 'gx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  typesOfShoes = [
    {
      "name": "Create user",
      "route": "user-mgt/create"
    }, {
      name: "List User",
      route: "user-mgt/list"
    }

  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'gx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  typesOfShoes: string[] = ['Peacock', 'Dove', 'Sparrow', 'Goose', 'Ostrich', 'Pigeon', 'Turkey', 'Hawk', 'Bald eagle', 'Raven', 'Parrot'];
}

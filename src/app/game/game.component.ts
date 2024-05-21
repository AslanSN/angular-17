import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
  <ul>
    @for (game of games; track game.id) {
      <li>{{game.name}}</li>
    }
  </ul>
  `,
  styles: ``
})
export class GameComponent {
games = [
  {
    id: 1,
    name:"Uncharted 4"
  },
  {
    id: 2,
    name:"Horizon Zero Dawn"
  },
  {
    id: 3,
    name:"Bloodborne"
  },
]
}

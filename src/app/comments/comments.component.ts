import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios varios</h3>
    <img src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png" alt="" />
    <p>Loreeeem iiipssssuuuummm</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}

import { Component } from '@angular/core';
import { posts } from 'src/app/data/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  './home-responsive.component.css']
})
export class HomeComponent {

  mainBigCardContent = posts[0];
  mainSmallCardsContent = posts.slice(0, 4);
  othersPosts = posts.splice(4, 6);

}

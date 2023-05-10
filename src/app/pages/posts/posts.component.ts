import { Component } from '@angular/core';
import { posts } from 'src/app/data/posts';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts:Post[] = posts
}

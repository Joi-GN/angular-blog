import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/app/data/posts';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: string | null = '';
  post: Post | undefined;

  constructor( 
    private route: ActivatedRoute,
    private navigator: Router
    ){}

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.post = this.getPostContent(this.id);
      if (!this.post) this.navigator.navigate(['/not-found']);
  }

  getPostContent(id: string | null): Post | undefined {
    return posts.find(post => post.id == parseInt(id!));
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() id: number = 0;
  @Input() image: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
}
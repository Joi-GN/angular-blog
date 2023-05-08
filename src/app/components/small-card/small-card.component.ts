import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() id: number | null = 0;
  @Input() cardTitle: string = "";
  @Input() image: string = "";
}

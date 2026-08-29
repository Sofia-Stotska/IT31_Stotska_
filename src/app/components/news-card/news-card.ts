import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input() title!: string;
  @Input() author!: string;

  @Output() buttonClicked = new EventEmitter<string>();

  onClick(): void {
    this.buttonClicked.emit(this.title);
  }
}
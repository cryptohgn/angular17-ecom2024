import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Asegúrate de que MatIconModule está importado aquí
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() ratings: number = 0; 
  @Input() starCount: number = 5;
  @Output() ratingUpdated = new EventEmitter<number>();

  hoverState: number = 0;

  rate(ratings: number) {
    this.ratings = ratings;
    this.ratingUpdated.emit(this.ratings);
  }

  setHoverState(ratings: number) {
    this.hoverState = ratings;
  }

  resetHoverState() {
    this.hoverState = 0;
  }
}

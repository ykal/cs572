import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-star',
  templateUrl: './game-star.component.html',
  styleUrls: ['./game-star.component.css']
})
export class GameStarComponent implements OnInit {
  @Input() rate!: number;
  stars!: number[];
  constructor() { }

  ngOnInit(): void {
   this.stars = (new Array(this.rate)).fill(0);
  }

}

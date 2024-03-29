import { Component, OnInit, Input } from '@angular/core';
import { product } from '../../interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  @Input() cards: product[] = [];

  constructor() { }

  ngOnInit() {}

}

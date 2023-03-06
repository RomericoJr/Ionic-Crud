import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent  implements OnInit {

@Input() Title: string = "";

  constructor() { }

  ngOnInit() {}

}

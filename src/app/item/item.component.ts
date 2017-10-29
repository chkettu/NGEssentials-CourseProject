import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    this.character.side = side;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.scss']
})
export class ChooseColorComponent implements OnInit {

  constructor() { }

  @Input() colorId!: number;
  @Input() color!: string;

  colorUrl!: string;

  leftSide = {
    "grid-column": 1
  }

  rightSide = {
    "grid-column": 2
  }

  ngOnInit(): void {
    this.colorUrl = 'url(../../../assets/' + this.color + '.png)'
  }

  onClick() {

  }

}

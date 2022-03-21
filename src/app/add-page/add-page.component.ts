import { Component, OnInit } from '@angular/core';
import ColorArray from 'src/enum/colors';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  constructor() { }

  colorArray = ColorArray;

  ngOnInit(): void {
  }

}

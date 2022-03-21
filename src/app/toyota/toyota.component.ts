import { Component, OnInit } from '@angular/core';
import { ToyotaService } from 'src/api/toyota.service';
import ColorArray from 'src/enum/colors';

@Component({
    selector: 'app-toyota',
    templateUrl: './toyota.component.html',
    styleUrls: ['./toyota.component.scss'],
    providers: [ToyotaService],
})

export class ToyotaComponent implements OnInit {
    constructor (
      private toyotaService: ToyotaService,
    ) {  }

    colorArray = ColorArray

    ngOnInit(): void {

    }

}
import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ToyotaService } from 'src/api/toyota.service';
import { ToyotaModel } from '../../../models/toyota-model';

@Component({
  selector: 'app-toyota-bar',
  templateUrl: './toyota.bar.component.html',
  styleUrls: ['./toyota.bar.component.scss'],
  providers: [ToyotaService],
})
export class ToyotaBarComponent implements OnInit {
  constructor(private toyotaService: ToyotaService) { }

  @Input() colorId!: number;
  @Input() color!: string;

  colorUrl!: string
  toyotas!: ToyotaModel[]
  toyotasLoaded: boolean = false;
  isExtended: boolean = false;
  extendedHeight!: number;

  ngOnInit(): void {
    this.getToyotasByColor(this.colorId);
    this.colorUrl = 'url(../../../assets/' + this.color + '.png)'
  }
  
  getToyotasByColor(colorId: number) {
    this.toyotaService.getToyotasByColor(colorId)
    .subscribe(data => this.toyotas = data);
  };

  onClick(){
    console.log(this.toyotas);

    this.isExtended = !this.isExtended;
  }

}

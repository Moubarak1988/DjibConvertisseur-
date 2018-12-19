import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temp= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.temp = this.convert.celsiusFahrenheit(event.target.value).toFixed(2);
    } else {
      this.temp = '';
    }
  
      }
  
    constructor(private convert: ConvertisseurService) {
  
    }

  ngOnInit() {
  }

}

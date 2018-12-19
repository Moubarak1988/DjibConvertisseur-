import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';

@Component({
  selector: 'app-convertisseur-temperatures',
  templateUrl: './convertisseur-temperatures.component.html',
  styleUrls: ['./convertisseur-temperatures.component.css']
})
export class ConvertisseurTemperaturesComponent implements OnInit {

  set= '';


converte = (event: any) => {

  if (event.target.value !='') {
    this.set = this.conv.celsiusEnFahrenheit(event.target.value).toFixed(2);
  } else {
    this.set = '';
  }

    }

  constructor(private conv: ConvertisseurService) {

  }

  ngOnInit() {
  }

}
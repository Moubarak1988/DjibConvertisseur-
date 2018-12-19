import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';

@Component({
  selector: 'app-distances',
  templateUrl: './distances.component.html',
  styleUrls: ['./distances.component.css']
})
export class DistancesComponent implements OnInit {
  distance= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.distance = this.convert.metrePied(event.target.value).toFixed(2);
    } else {
      this.distance = '';
    }
  
      }
  
    constructor(private convert: ConvertisseurService) {
  
    }
  ngOnInit() {
  }

}

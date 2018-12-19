import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distances',
  templateUrl: './distances.component.html',
  styleUrls: ['./distances.component.css']
})
export class DistancesComponent implements OnInit {
  set= '';


  converte = (event: any) => {
  
    if (event.target.value !='') {
      this.set = this.conv.metreEnPied(event.target.value).toFixed(2);
    } else {
      this.set = '';
    }
  
      }
  
    constructor(private conv: ConvertisseurService) {
  
    }
  
    ngOnInit() {
    }
  
  }
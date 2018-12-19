import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';
@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {
  poid= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.poid = this.convert.kiloLivre(event.target.value).toFixed(2);
    } else {
      this.poid = '';
    }
  
      }
  
    constructor(private convert: ConvertisseurService) {
  
    }
  ngOnInit() {
  }

}

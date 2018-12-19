import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';


@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {
  set= '';


converte = (event: any) => {

  if (event.target.value !='') {
    this.set = this.conv.kilosEnLivres(event.target.value).toFixed(2);
  } else {
    this.set = '';
  }

    }

  constructor(private conv: ConvertisseurService) {

  }

  ngOnInit() {
  }

}
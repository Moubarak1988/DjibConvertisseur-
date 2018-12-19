import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertisseurService {

  constructor() { }
  kiloLivre = (kilo: number) => {
    return kilo * 2.2046;
  }
  
  metrePied = (metre: number) => {
    return metre * 3.2808;
  }
  
  celsiusFahrenheit = (celsius: number) => {
    return celsius * 9/5 + 32;
  }
}


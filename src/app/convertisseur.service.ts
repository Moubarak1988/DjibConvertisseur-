import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertisseurService {

  constructor() { }
  kiloEnLivre = (kilo: number) => {
    return kilo * 2.2046;
  }

  metreEnPied = (metre: number) => {
    return metre * 3.2808;
  }

  celsiusEnFahrenheit = (celsius: number) => {
    return celsius * 9/5 + 32;
  }
}
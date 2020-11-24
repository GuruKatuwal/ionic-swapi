import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BizLogicService {

  constructor() { }
  getDisplayColor(planet){
    return planet.name == 'unknown' ?
    'goldenrod' :
    planet.name == 'Tatooine' ?
    'green' : 'inherit'
  }
}
// if ('unknown' == (planet.name))
//   return 'goldenrod'

import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  planets = [];
  constructor(private swapiSvc: SwapiService) {
    this.swapiSvc
    .fetchPlanets()
    .subscribe(
      data => this.planets = [
        ...this.planets,
        ...data
      ],
      err => console.err(err)
    );
  }

}

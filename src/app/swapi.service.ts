import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, merge, race, EMPTY } from 'rxjs';
import { tap, map, repeat,expand } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }
  fetchPlanets(){
  //   return this.httpSvc.get("https://swapi.dev/api/planets/").pipe(
  //     tap(x => console.log(x)),
  //     map(x => (x as any).results.map(y => ({name: y.name}))),
  //     tap(x => console.log(x)),
  //     repeat(10)
  //     // map(x => (x as any).map(({name: x.name }))),
  //     // tap(x => console.log(x))
  //   );
  // return merge (
  //   this.httpSvc.get("https://swapi.dev/api/planets/")
  //   this.httpSvc.get("https://swapi.dev/api/planets/?page=2")
  // ).pipe(
  //   map(x => (x as any).results.map(y => ({name: y.name})))
  // );
    return this.httpSvc.get("https://swapi.dev/api/planets/").pipe(
      expand(x => (x as any).next ? this.httpSvc.get((x as any).next.replaceAll("http:", "https:")) : EMPTY),
      map(x => (x as any).results.map(y => ({name: y.name}))),
  );
}
}

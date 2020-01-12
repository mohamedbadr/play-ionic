import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1', 'Cairo', 'Capital of EGYPT', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Late_evening_in_Cairo.jpg', 50.75),
    new Place('p2', 'Paris', 'Capital of France', 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', 80.99),
    new Place('p3', 'washington', 'Capital of USA', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/US_Navy_030926-F-2828D-307_Aerial_view_of_the_Washington_Monument.jpg', 120.25),
  ];

  constructor() { }

  getPlaces() {
    return [...this._places];
  }
}

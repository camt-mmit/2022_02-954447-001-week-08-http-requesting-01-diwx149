import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parsePlanetsList } from '../helpers';
import { List, Planet, RawList, RawPlanet, SearchData } from '../models';
const url = 'https://swapi.dev/api/planets';
@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<Planet>> {
    return this.http
      .get<RawList<RawPlanet>>(url, { params: searchData })
      .pipe(map((obj) => parsePlanetsList(obj)));
  }
}

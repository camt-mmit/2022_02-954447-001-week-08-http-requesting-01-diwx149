import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseSpeciesList } from '../helpers';
import { List, RawList, RawSpecie, SearchData, Specie } from '../models';

const url = 'https://swapi.dev/api/species';
@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<List<Specie>> {
    return this.http
      .get<RawList<RawSpecie>>(url, { params: searchData })
      .pipe(map((obj) => parseSpeciesList(obj)));
  }
}

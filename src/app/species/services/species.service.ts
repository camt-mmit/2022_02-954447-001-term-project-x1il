import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseSpecie } from '../helper';
import { Specie, SearchData } from '../models';

const url = 'https://legacy--api.herokuapp.com/api/v1/species'

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private readonly http: HttpClient) {}

  getAll(SearchData?: SearchData): Observable<Array<Specie>> {
    return this.http.get<Array<Specie>>(url, { params: SearchData });
  }

  get(id: string): Observable<Specie> {
    return this.http.get<Specie>(`${url}/${id}`).pipe(map((obj) => parseSpecie(obj)));
  }
}

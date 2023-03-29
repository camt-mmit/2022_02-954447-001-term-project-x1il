import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchData, Spell } from '../models';

const url = 'https://hp-api.onrender.com/api/spells'

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  constructor(private readonly http: HttpClient) {}

  getAll(SearchData?: SearchData): Observable<Array<Spell>> {
    return this.http.get<Array<Spell>>(url, { params: SearchData });
  }
}
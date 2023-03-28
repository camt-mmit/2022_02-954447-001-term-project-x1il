import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, RawList,RawSpell,SearchData, Spell } from '../models';
import { parseSpellList } from '../heplers';

const url = 'https://hp-api.onrender.com/api/spells'

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private readonly http: HttpClient) { }
  
  getAll(SearchData: SearchData): Observable<List<Spell>>{
    return this.http
    .get<RawList<RawSpell>>(url, {params:SearchData})
    .pipe(map((obj) => parseSpellList(obj)));
  }
}


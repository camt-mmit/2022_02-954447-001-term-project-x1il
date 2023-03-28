import { Injectable } from '@angular/core';
import { parseSpellList } from '../heplers';
import { List, Spell } from '../models';
const url = 'https://hp-api.onrender.com/api/spells'

@Injectable({
  providedIn: 'root'
})
export class SpellFetchService {

  async getAll(): Promise<List<Spell>> {
    const res = await fetch(url);
    return parseSpellList(await res.json());
  }
}

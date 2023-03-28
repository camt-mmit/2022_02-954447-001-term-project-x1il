import { Injectable } from '@angular/core';
import { parseStudentList } from '../helpers';
import { List, Student } from '../models';
const url = 'https://hp-api.onrender.com/api/characters/students'

@Injectable({
  providedIn: 'root'
})
export class CharacterFetchService {

  async getAll(): Promise<List<Student>> {
    const res = await fetch(url);
    return parseStudentList(await res.json());
  }
}

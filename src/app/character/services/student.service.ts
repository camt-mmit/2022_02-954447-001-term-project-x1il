import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { List, Student, SearchData, RawStudent, RawList } from '../models';
import { parseSpecie } from 'src/app/species/helper';
import { Specie } from 'src/app/species/models';

const url = 'https://hp-api.onrender.com/api/characters/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(url, { params: searchData });
  }
  get(id: string): Observable<Student> {
    return this.http.get<Student>(`${url}/${id}`).pipe(map((obj) => parseStudent(obj)));
  }
  
  // get (id: string):Observable<Student> {
  //   return this.http
  //     .get<RawStudent>(`${url}/${id}`)
  //     .pipe(map((obj) => parseStudent(obj)))
  // }
}
function parseStudent(obj: Student): Student {
  console.log(obj);
  return {
    ...obj
  }
}


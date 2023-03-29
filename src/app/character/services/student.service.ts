import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { List, Student, SearchData, RawStudent, RawList } from '../models';

const url = 'https://hp-api.onrender.com/api/characters/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  get(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(url, { params: searchData });
  }
  
  // get (id: string):Observable<Student> {
  //   return this.http
  //     .get<RawStudent>(`${url}/${id}`)
  //     .pipe(map((obj) => parseStudent(obj)))
  // }
}

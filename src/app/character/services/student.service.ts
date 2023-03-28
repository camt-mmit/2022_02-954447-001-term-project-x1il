import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { List, Student, SearchData, RawStudent, RawList } from '../models';
import {  parseStudentList } from '../helpers';
const url = 'https://hp-api.onrender.com/api/characters/students'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly http: HttpClient) { }
  
  getAll(SearchData: SearchData): Observable<List<Student>>{
    return this.http
    .get<RawList<RawStudent>>(url, {params:SearchData})
    .pipe(map((obj) => parseStudentList(obj)));
  }
  // get (id: string):Observable<Student> {
  //   return this.http
  //     .get<RawStudent>(`${url}/${id}`)
  //     .pipe(map((obj) => parseStudent(obj)))
  // }
}

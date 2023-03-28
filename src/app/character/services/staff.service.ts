import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, Staff, SearchData, RawList, RawStaff } from '../models';
import {  parseStaffList } from '../helpers';


const url = 'https://hp-api.onrender.com/api/characters/staff'
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private readonly http: HttpClient) { }
  
  getAll(SearchData: SearchData): Observable<List<Staff>>{
    return this.http
    .get<RawList<RawStaff>>(url, {params:SearchData})
    .pipe(map((obj) => parseStaffList(obj)));
  }
}

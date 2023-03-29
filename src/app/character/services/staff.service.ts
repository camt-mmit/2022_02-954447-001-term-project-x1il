import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, Staff, SearchData, RawList, RawStaff } from '../models';


const url = 'https://hp-api.onrender.com/api/characters/staff'
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  get(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<Array<Staff>> {
    return this.http.get<Array<Staff>>(url, { params: searchData });
  }  
  // getAll(SearchData: SearchData): Observable<List<Staff>>{
  //   return this.http
  //   .get<RawList<RawStaff>>(url, {params:SearchData})
  //   .pipe(map((obj) => parseStaffList(obj)));
  // }
}

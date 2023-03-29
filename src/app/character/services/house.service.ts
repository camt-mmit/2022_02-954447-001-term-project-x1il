import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House, SearchData } from '../models';

const url = 'https://legacy--api.herokuapp.com/api/v1/houses';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  get(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<Array<House>> {
    return this.http.get<Array<House>>(url, { params: searchData });
  } 
}

import { Injectable } from '@angular/core';
import { List, Staff } from '../models';
import {  parseStaffList } from '../helpers';


const url = 'https://hp-api.onrender.com/api/characters/staff'
@Injectable({
  providedIn: 'root'
})
export class StaffFetchService {

  async getAll(): Promise<List<Staff>> {
    const res = await fetch(url);
    return parseStaffList(await res.json());
  }
}

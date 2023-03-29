import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { House, SearchData } from '../../models';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit{
  @Input() data!: Array<House>;
  @Input() search?: SearchData

  @Output() searchChange = new  EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<House>();

  protected formGroup!:FormGroup<{
    search:FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;
  public list: House[] = [];

  // private subscription: Subscription | null = null;
  constructor(fb:FormBuilder){
    this.fb =fb.nonNullable;
  }
  
  ngOnInit(): void {
    if(!this.data) {
      throw new Error(`Property 'data' is required!`);
    }

    this.formGroup = this.fb.group({
      search: this.search?.search ??'',
    });
    // this.list = this.data.items;
  }
  
  // constructor(private http: HttpClient){ }
  // ngOnInit(): void {
  //   this.http.get<Staff[]>('https://hp-api.onrender.com/api/characters/staff')
  //   .subscribe(Response =>{
  //     this.list = Response;
  //   })
  // }
  

  protected doSearch(): void {
    const value = this.formGroup.value;
    if (value.search) {
      const search = value.search?.toLowerCase();
      this.data = this.data.filter(
        (item) =>
          item.house.toLowerCase().includes(search)
      );
      this.searchChange.emit(this.formGroup.value);
    } else {
      this.doClear();
    }
  }

  //   doSearch(name:string,){
  //     this.http.get<Student[]>('https://hp-api.onrender.com/api/characters/students?name='+name)
  //     .subscribe(Response =>{
  //       this.list = Response;
  //     })
  // }

  protected doClear(): void {
    this.formGroup.setValue({ search: '' });
    this.searchChange.emit({});
  }

  protected changepage(searchParms?: URLSearchParams): void{
    const search = searchParms?.get('search');
    const page = searchParms?.get('page');

    const searchData = {
      ...(search ? {search} :{}),
      ...(page ? {page} :{}),
    };
    this.searchChange.emit(searchData);
  }

  protected doSelect(item: House): void {
    this.itemSelected.emit(item);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { List, SearchData, Student } from '../../models';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() data!: Array<Student>;
  @Input() search?: SearchData;

  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<string>();

  protected formGroup!: FormGroup<{
    search: FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }

    this.formGroup = this.fb.group({
      search: this.search?.search ?? '',
    });
  }

  protected get pageOffset(): number {
    return (+(this.search?.page ?? 1) - 1) * 10;
  }

  protected doSearch(): void {
    const value = this.formGroup.value;

    if (value.search) {
      this.searchChange.emit(this.formGroup.value);
    } else {
      this.doClear();
    }
  }

  protected doClear(): void {
    this.formGroup.setValue({ search: '' });
    this.searchChange.emit({});
  }

  protected changePage(searchParams?: URLSearchParams): void {
    const search = searchParams?.get('search');
    const page = searchParams?.get('page');

    const searchData = {
      ...(search ? { search } : {}),
      ...(page ? { page } : {}),
    };

    this.searchChange.emit(searchData);
  }

  protected doSelect(url: URL): void {
    const id = url.pathname.replace(/\/$/, '').split('/').pop();
    if (id) {
      this.itemSelected.emit(id);
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, NonNullableFormBuilder, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Specie, SearchData } from '../models';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  @Input() data!: Array<Specie>;
  @Input() search?: SearchData;

  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<Specie>();

  protected formGroup!: FormGroup<{
    search: FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    if (!this.data) {
      throw new Error('Data is required!');
    }

    this.formGroup = this.fb.group({
      search: this.search?.search?? '',
    });
  }

  protected doSearch(): void {
    const value = this.formGroup.value;
    if (value.search) {
      const search = value.search?.toLowerCase();
      this.data = this.data.filter(
        (item) =>
          item.name.toLowerCase().includes(search)
      );
      this.searchChange.emit(this.formGroup.value);
    } else {
      this.doClear();
    }
  }

  protected doClear(): void {
    this.formGroup.setValue({search: '' });
    this.searchChange.emit({});
  }

  protected changePage(searchParms?: URLSearchParams): void {
    const search = searchParms?.get('search');
    const page = searchParms?.get('page');

    const SearchData = {
      ...(search ? { search } : {}),
      ...(page ? { page } : {}),
    };

    this.searchChange.emit(SearchData);
  }

  protected doSelect(item: Specie): void {
    this.itemSelected.emit(item);
  }
}

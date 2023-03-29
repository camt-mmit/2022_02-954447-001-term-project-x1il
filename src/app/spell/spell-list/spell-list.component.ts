import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchData, Spell } from '../models';

@Component({
  selector: 'app-spell-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  @Input() data!: Array<Spell>;
  @Input() search?: SearchData;

  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<Spell>();

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

  protected doSelect(item: Spell): void {
    this.itemSelected.emit(item);
  }
}

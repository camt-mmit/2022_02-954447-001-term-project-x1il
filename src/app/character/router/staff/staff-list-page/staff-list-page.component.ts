import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffListComponent } from 'src/app/character/staff/staff-list/staff-list.component';
import { Observable, switchMap } from 'rxjs';
import { List, SearchData, Staff } from 'src/app/character/models';
import { StaffService } from 'src/app/character/services/staff.service';

@Component({
  selector: 'app-staff-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, StaffListComponent],
  templateUrl: './staff-list-page.component.html',
  styleUrls: ['./staff-list-page.component.scss']
})
export class StaffListPageComponent {
  protected readonly data$: Observable<List<Staff>>;

  protected searchData: SearchData;

  constructor(
    dataService: StaffService, 
    private route: ActivatedRoute, 
    private readonly router: Router,){
    //this.data$ = dataService.getAll({page:'2'});
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params)),
    );
  }
  protected search(searchData:SearchData): void{
    this.router.navigate([],{
      queryParams: searchData,
    })
  }
  // protected doSelect(item: Student): void{
  //   this.itemSelected.emit(item);
  // }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { List, SearchData, Student } from 'src/app/character/models';
import { StudentService } from 'src/app/character/services/student.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentListComponent } from 'src/app/character/student/student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list-page',
  standalone: true,
  imports: [CommonModule,StudentListComponent, ReactiveFormsModule,RouterModule],
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.scss']
})
export class StudentListPageComponent {
  protected readonly data$: Observable<List<Student>>;

  protected searchData: SearchData;

  constructor(
    dataService: StudentService, 
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable, switchMap } from 'rxjs';
import { List, SearchData, Student } from 'src/app/character/models';
import { StudentService } from 'src/app/character/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentListComponent } from 'src/app/character/student/student-list/student-list.component';

@Component({
  selector: 'app-student-list-page',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.scss'],
})
export class StudentListPageComponent {
  protected readonly data$: Observable<Array<Student>>;

  protected searchData: SearchData | undefined;

  constructor(
    dataService: StudentService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    //this.data$ = dataService.getAll({page:'2'});
    // this.searchData = route.snapshot.queryParams;
    // this.data$ = route.queryParams.pipe(
    //   switchMap((params) => dataService.getAll(params)),
    // );
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params)),

      // map(([params, data]) => {
      //   this.searchData = params;
      //   return data;
      // }),
    );
  }
  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
      replaceUrl: true,
    });
  }
  // protected doSelect(item: Student): void{
  //   this.itemSelected.emit(item);
  // }
}

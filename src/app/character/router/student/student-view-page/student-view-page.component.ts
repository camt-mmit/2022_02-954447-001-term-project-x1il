import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from 'src/app/character/models';
import { StudentViewComponent } from 'src/app/character/student/student-view/student-view.component';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/character/services/student.service';

@Component({
  selector: 'app-student-view-page',
  standalone: true,
  imports: [CommonModule, StudentViewComponent],
  templateUrl: './student-view-page.component.html',
  styleUrls: ['./student-view-page.component.scss']
})
export class StudentViewPageComponent {
  protected readonly data$: Observable<Student>;

  constructor(dataService: StudentService, route: ActivatedRoute) {
    this.data$ = route.params.pipe(
      switchMap((params) => dataService.get(params['id']) as Observable<Student>),
    );
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from 'src/app/character/models';

@Component({
  selector: 'app-student-view-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-view-page.component.html',
  styleUrls: ['./student-view-page.component.scss']
})
export class StudentViewPageComponent implements OnInit {
  @Input() data!: Student;
  ngOnInit(): void {
    if(!this.data){
      throw new Error('Method not implemented.');
    }
  }
}

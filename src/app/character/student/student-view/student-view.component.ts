import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models';

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit{
  @Input() data!: Student;
  
  ngOnInit(): void {
    if(!this.data){
      throw new Error('Method not implemented.');
    }
  }
}

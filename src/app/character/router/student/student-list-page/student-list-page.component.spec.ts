import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListPageComponent } from './student-list-page.component';

describe('StudentListPageComponent', () => {
  let component: StudentListPageComponent;
  let fixture: ComponentFixture<StudentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StudentListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

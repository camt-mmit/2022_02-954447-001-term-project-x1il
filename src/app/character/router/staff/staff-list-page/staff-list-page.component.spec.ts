import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListPageComponent } from './staff-list-page.component';

describe('StaffListPageComponent', () => {
  let component: StaffListPageComponent;
  let fixture: ComponentFixture<StaffListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StaffListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

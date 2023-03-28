import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffViewPageComponent } from './staff-view-page.component';

describe('StaffViewPageComponent', () => {
  let component: StaffViewPageComponent;
  let fixture: ComponentFixture<StaffViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StaffViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

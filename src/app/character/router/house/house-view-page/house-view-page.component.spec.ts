import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseViewPageComponent } from './house-view-page.component';

describe('HouseViewPageComponent', () => {
  let component: HouseViewPageComponent;
  let fixture: ComponentFixture<HouseViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HouseViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

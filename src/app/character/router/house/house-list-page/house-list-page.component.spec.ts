import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListPageComponent } from './house-list-page.component';

describe('HouseListPageComponent', () => {
  let component: HouseListPageComponent;
  let fixture: ComponentFixture<HouseListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HouseListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

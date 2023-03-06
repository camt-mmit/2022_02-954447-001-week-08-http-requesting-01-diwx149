import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListPageComponent } from './planets-list-page.component';

describe('PlanetsListPageComponent', () => {
  let component: PlanetsListPageComponent;
  let fixture: ComponentFixture<PlanetsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PlanetsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

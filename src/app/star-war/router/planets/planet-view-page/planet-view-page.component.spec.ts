import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetViewPageComponent } from './planet-view-page.component';

describe('PlanetViewPageComponent', () => {
  let component: PlanetViewPageComponent;
  let fixture: ComponentFixture<PlanetViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PlanetViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

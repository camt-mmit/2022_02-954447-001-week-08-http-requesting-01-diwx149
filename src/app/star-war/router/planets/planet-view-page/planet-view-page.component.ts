import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsService } from 'src/app/star-war/services/planets.service';
import { Observable, switchMap } from 'rxjs';
import { Planet } from 'src/app/star-war/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetViewComponent } from 'src/app/star-war/planets/planet-view/planet-view.component';

@Component({
  selector: 'star-war-planet-view-page',
  standalone: true,
  imports: [CommonModule, PlanetViewComponent],
  templateUrl: './planet-view-page.component.html',
  styleUrls: ['./planet-view-page.component.scss'],
})
export class PlanetViewPageComponent {
  protected readonly data$: Observable<Planet>;
  constructor(
    private readonly dataService: PlanetsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.dataService.get(params['id']))
    );
  }
  back(): void {
    history.back();
  }
}

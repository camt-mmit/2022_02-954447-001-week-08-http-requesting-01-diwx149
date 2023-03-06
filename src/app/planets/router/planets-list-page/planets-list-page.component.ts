import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { List, Planet, SearchData } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from '../../planets.service';
import { PlanetsListComponent } from '../../planets-list/planets-list.component';

@Component({
  selector: 'app-planets-list-page',
  standalone: true,
  imports: [CommonModule, PlanetsListComponent],
  templateUrl: './planets-list-page.component.html',
  styleUrls: ['./planets-list-page.component.scss'],
})
export class PlanetsListPageComponent {
  protected readonly data$: Observable<List<Planet>>;

  protected searchData: SearchData;

  constructor(
    dataService: PlanetsService,
    route: ActivatedRoute,
    private readonly router: Router
  ) {
    //this.data$ = dataService.getAll({ page: '3' });
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params))
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
    });
  }
}

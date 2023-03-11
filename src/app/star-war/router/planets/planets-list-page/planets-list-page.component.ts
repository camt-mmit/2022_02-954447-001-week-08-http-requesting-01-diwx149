import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { List, Planet, SearchData } from 'src/app/star-war/models';
import { PlanetsService } from 'src/app/star-war/services/planets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsListComponent } from 'src/app/star-war/planets/planets-list/planets-list.component';

@Component({
  selector: 'star-war-planets-list-page',
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
    private readonly route: ActivatedRoute,
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
  onItemSelect(item: Planet): void {
    const paths = item.url.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}

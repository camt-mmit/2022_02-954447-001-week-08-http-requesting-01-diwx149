import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from '../../species-list/species-list.component';
import { List, SearchData, Specie } from 'src/app/models';
import { SpeciesService } from '../../species.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-list-page',
  standalone: true,
  imports: [CommonModule, SpeciesListComponent],
  templateUrl: './species-list-page.component.html',
  styleUrls: ['./species-list-page.component.scss'],
})
export class SpeciesListPageComponent {
  protected readonly data$: Observable<List<Specie>>;

  protected searchData: SearchData;

  constructor(
    dataService: SpeciesService,
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

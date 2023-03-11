import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonViewComponent } from 'src/app/star-war/people/person-view/person-view.component';
import { PeopleService } from 'src/app/star-war/services/people.service';
import { Observable, switchMap } from 'rxjs';
import { Person } from 'src/app/star-war/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'star-war-person-view-page',
  standalone: true,
  imports: [CommonModule, PersonViewComponent],
  templateUrl: './person-view-page.component.html',
  styleUrls: ['./person-view-page.component.scss'],
})
export class PersonViewPageComponent {
  protected readonly data$: Observable<Person>;
  constructor(
    private readonly dataService: PeopleService,
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

import { Routes } from '@angular/router';
import { PeopleListPageComponent } from './app/people/router/people-list-page/people-list-page.component';
import { PeopleComponent } from './app/people/router/people/people.component';
import { PlanetsListPageComponent } from './app/planets/router/planets-list-page/planets-list-page.component';
import { PlanetsComponent } from './app/planets/router/planets/planets.component';
import { SpeciesListPageComponent } from './app/species/router/species-list-page/species-list-page.component';
import { SpeciesComponent } from './app/species/router/species/species.component';

export const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: 'people',
    component: PeopleComponent,
    children: [{ path: '', component: PeopleListPageComponent }],
  },
  {
    path: 'species',
    component: SpeciesComponent,
    children: [{ path: '', component: SpeciesListPageComponent }],
  },
  {
    path: 'planets',
    component: PlanetsComponent,
    children: [{ path: '', component: PlanetsListPageComponent }],
  },
];

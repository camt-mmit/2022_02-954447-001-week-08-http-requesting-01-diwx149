import { Route } from '@angular/router';
import { SpeciesListPageComponent } from './router/species/species-list-page/species-list-page.component';
import { PeopleListPageComponent } from './router/people/people-list-page/people-list-page.component';
import { PlanetsListPageComponent } from './router/planets/planets-list-page/planets-list-page.component';
import { StarWarComponent } from './router/star-war/star-war.component';
import { PersonViewPageComponent } from './router/people/person-view-page/person-view-page.component';
import { SpecieViewPageComponent } from './router/species/specie-view-page/specie-view-page.component';
import { PlanetViewPageComponent } from './router/planets/planet-view-page/planet-view-page.component';

export const routes: Route[] = [
  {
    path: '',
    component: StarWarComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'people/:id', component: PersonViewPageComponent },
      { path: 'species', component: SpeciesListPageComponent },
      { path: 'species/:id', component: SpecieViewPageComponent },
      { path: 'planets', component: PlanetsListPageComponent },
      { path: 'planets/:id', component: PlanetViewPageComponent },
    ],
  },
];

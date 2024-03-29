import { Route } from '@angular/router';
import { AuthorizationPageComponent } from './router/authorization-page/authorization-page.component';
import { EventsListPageComponent } from './router/events/events-list-page/events-list-page.component';
import { GoogleComponent } from './router/google/google.component';
import { RequireTokenComponent } from './router/require-token/require-token.component';

export const routes: Route[] = [
  {
    path: '',
    component: GoogleComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      {
        path: '',
        component: RequireTokenComponent,
        children: [{ path: 'events', component: EventsListPageComponent }],
      },
      { path: 'authorization', component: AuthorizationPageComponent },
    ],
  },
];

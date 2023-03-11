import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'star-war', pathMatch: 'full' },
  //Note:Lazy loading for star-war components
  {
    path: 'star-war',
    loadChildren: () =>
      import('./app/star-war/routes').then((mod) => mod.routes),
  },
];

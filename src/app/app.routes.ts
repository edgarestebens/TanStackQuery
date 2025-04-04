import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'issues',
    loadComponent: () =>
      import('./modules/issues/pages/issues-list/issues-list-pages.component'),
  },
  {
    path: 'issue/:number',
    loadComponent: () =>
      import('./modules/issues/pages/issue/issue-page.component'),
  },

  {
    path: '**',
    redirectTo: 'issues',
  },
];

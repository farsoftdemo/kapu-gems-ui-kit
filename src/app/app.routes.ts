import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',

    loadComponent: () =>
      import('./pages/auth/login/login.component')
      .then(m => m.LoginComponent)
  },

  {
    path: '',

    loadComponent: () =>
      import('./layout/dashboard-layout/dashboard-layout.component')
      .then(m => m.DashboardLayoutComponent),

    children: [

      {
        path: 'dashboard',

        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      },

      {
        path: 'stock-search',

        loadComponent: () =>
          import('./pages/stock-search/stock-search.component')
          .then(m => m.StockSearchComponent)
      }

    ]
  }
];

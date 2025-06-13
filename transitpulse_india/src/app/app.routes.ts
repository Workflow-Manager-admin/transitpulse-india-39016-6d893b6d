import { Routes } from '@angular/router';

// Lazy-load stub components for scalability (change to eager load if desired)
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nearby'
  },
  {
    path: 'nearby',
    title: 'Nearby Stops',
    loadComponent: () =>
      import('./nearby-stops/nearby-stops.component').then(m => m.NearbyStopsComponent)
  },
  {
    path: 'plan',
    title: 'Plan Trip',
    loadComponent: () =>
      import('./plan-trip/plan-trip.component').then(m => m.PlanTripComponent)
  },
  {
    path: 'saved',
    title: 'Saved Routes',
    loadComponent: () =>
      import('./saved-routes/saved-routes.component').then(m => m.SavedRoutesComponent)
  },
  {
    path: 'city',
    title: 'My City',
    loadComponent: () =>
      import('./my-city/my-city.component').then(m => m.MyCityComponent)
  },
  // 404 Route
  {
    path: '**',
    redirectTo: 'nearby'
  }
];

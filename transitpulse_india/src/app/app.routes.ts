import { Routes } from '@angular/router';

// Main route config: All features are now lazy-loaded modules
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nearby'
  },
  {
    path: 'nearby',
    title: 'Nearby Stops',
    loadChildren: () => import('./nearby-stops/nearby-stops.module').then(m => m.NearbyStopsModule)
  },
  {
    path: 'plan',
    title: 'Plan Trip',
    loadChildren: () => import('./plan-trip/plan-trip.module').then(m => m.PlanTripModule)
  },
  {
    path: 'saved',
    title: 'Saved Routes',
    loadChildren: () => import('./saved-routes/saved-routes.module').then(m => m.SavedRoutesModule)
  },
  {
    path: 'city',
    title: 'My City',
    loadChildren: () => import('./my-city/my-city.module').then(m => m.MyCityModule)
  },
  // 404 Route
  {
    path: '**',
    redirectTo: 'nearby'
  }
];

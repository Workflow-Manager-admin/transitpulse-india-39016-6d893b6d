import { Component } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * Represents the "Nearby Stops" tab for showing map and stop list.
 */
@Component({
  selector: 'app-nearby-stops',
  standalone: true,
  template: `
    <section class="tab-section">
      <h1>Nearby Stops</h1>
      <p>Find stops, stations, and departures near your location.</p>
      <div class="placeholder-card">[Map and stop list coming soon]</div>
    </section>
  `,
  styles: [`
    .tab-section { max-width: 400px; margin: 0 auto; }
    .placeholder-card {
      background: #f1f3f4; color: #666;
      border-radius: 0.5rem; padding: 1rem; text-align: center;
      margin-top: 2rem;
    }
  `]
})
export class NearbyStopsComponent {}

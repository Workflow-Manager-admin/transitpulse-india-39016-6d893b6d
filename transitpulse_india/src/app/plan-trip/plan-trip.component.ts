import { Component } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * Represents the "Plan Trip" tab for user journey planning.
 */
@Component({
  selector: 'app-plan-trip',
  standalone: true,
  template: `
    <section class="tab-section">
      <h1>Plan Trip</h1>
      <p>Plan a journey across the city with walking and public transport routes.</p>
      <div class="placeholder-card">[Trip planner UI coming soon]</div>
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
export class PlanTripComponent {}

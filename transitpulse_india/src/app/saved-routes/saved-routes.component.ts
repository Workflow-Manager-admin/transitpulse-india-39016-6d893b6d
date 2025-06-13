import { Component } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * Represents the "Saved Routes" tab for offline or favorited routes.
 */
@Component({
  selector: 'app-saved-routes',
  standalone: true,
  template: `
    <section class="tab-section">
      <h1>Saved Routes</h1>
      <p>Access your favorite and offline routes here.</p>
      <div class="placeholder-card">[Saved routes list coming soon]</div>
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
export class SavedRoutesComponent {}

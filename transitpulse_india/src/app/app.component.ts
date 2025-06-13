import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * PUBLIC_INTERFACE
 * Root app component for TransitPulse India.
 * Provides global routing outlet and mobile bottom navigation bar.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TransitPulse India';
  // No additional logic required; navigation handled via routerLink.
}

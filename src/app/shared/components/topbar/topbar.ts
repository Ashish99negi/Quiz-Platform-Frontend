import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../../core/services/sidebar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.html',
})
export class TopbarComponent {
  sidebar = inject(SidebarService);
}

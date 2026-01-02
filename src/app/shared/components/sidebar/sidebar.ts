import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../../core/services/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  sidebar = inject(SidebarService);
  router = inject(Router);

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}

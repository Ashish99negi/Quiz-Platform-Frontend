import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded shadow">Users</div>
      <div class="bg-white p-6 rounded shadow">Attempts</div>
      <div class="bg-white p-6 rounded shadow">Accuracy</div>
    </div>
  `,
})
export class DashboardHomeComponent {}

// company-sidebar.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-company-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './company-sidebar.html',
  styleUrls: ['./company-sidebar.scss']
})
export class CompanySidebarComponent {
  @Output() menuItemClick = new EventEmitter<string>();

  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/company-dashboard' },
    { icon: 'campaign', label: 'My Campaigns', route: '/campaigns', badge: 3 },
    { icon: 'shopping_bag', label: 'Products', route: '/products' },
    { icon: 'shopping_cart', label: 'My Orders', route: '/orders', badge: 7 },
    { icon: 'receipt', label: 'Invoices', route: '/invoices', badge: 2 },
    { icon: 'bar_chart', label: 'Analytics', route: '/analytics' },
    { icon: 'description', label: 'Reports', route: '/reports' },
    { icon: 'folder', label: 'Documents', route: '/documents' },
    { icon: 'settings', label: 'Settings', route: '/settings' }
  ];

  onMenuClick(item: MenuItem): void {
    this.menuItemClick.emit(item.route);
  }
}

// sidebar.ts (updated - no collapsing)
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './admin-sidebar.html',
  styleUrls: ['./admin-sidebar.scss']
})
export class SidebarComponent {
  @Output() menuItemClick = new EventEmitter<string>();

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/admin-dashboard'
    },
    {
      label: 'Users',
      icon: 'people',
      route: '/users',
      badge: 12
    },
    {
      label: 'Campaigns',
      icon: 'campaign',
      route: '/campaigns',
      badge: 5
    },
    {
      label: 'Products',
      icon: 'inventory_2',
      route: '/products'
    },
    {
      label: 'Orders',
      icon: 'shopping_cart',
      route: '/orders',
      badge: 23
    },
    {
      label: 'Analytics',
      icon: 'analytics',
      route: '/analytics'
    },
    {
      label: 'Reports',
      icon: 'assessment',
      route: '/reports'
    },
    {
      label: 'Messages',
      icon: 'mail',
      route: '/messages',
      badge: 8
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];

  constructor(private router: Router) {}

  onMenuItemClick(item: MenuItem): void {
    this.menuItemClick.emit(item.route);
    this.router.navigate([item.route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
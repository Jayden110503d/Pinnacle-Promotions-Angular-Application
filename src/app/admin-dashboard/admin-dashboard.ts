// admin-dashboard.component.ts (updated templateUrl)
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from '../admin-sidebar/admin-sidebar';

interface DashboardStats {
  title: string;
  value: string;
  icon: string;
  color: string;
  change: string;
  changeType: 'positive' | 'negative';
}

interface RecentActivity {
  user: string;
  action: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    SidebarComponent
  ],
  templateUrl: './admin-dashboard.html',  // <-- Changed from .component.html to .html
  styleUrls: ['./admin-dashboard.scss']   // <-- Changed from .component.scss to .scss
})
export class AdminDashboardComponent implements OnInit {
  stats: DashboardStats[] = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: 'people',
      color: '#3b82f6',
      change: '+12.5%',
      changeType: 'positive'
    },
    {
      title: 'Active Campaigns',
      value: '48',
      icon: 'campaign',
      color: '#10b981',
      change: '+8.2%',
      changeType: 'positive'
    },
    {
      title: 'Revenue',
      value: '$124,563',
      icon: 'attach_money',
      color: '#f59e0b',
      change: '+23.1%',
      changeType: 'positive'
    },
    {
      title: 'Pending Orders',
      value: '156',
      icon: 'shopping_cart',
      color: '#ef4444',
      change: '-4.3%',
      changeType: 'negative'
    }
  ];

  recentActivities: RecentActivity[] = [
    { user: 'John Doe', action: 'Created new campaign', time: '5 mins ago', status: 'completed' },
    { user: 'Jane Smith', action: 'Updated product listing', time: '12 mins ago', status: 'completed' },
    { user: 'Mike Johnson', action: 'Placed order #1234', time: '23 mins ago', status: 'pending' },
    { user: 'Sarah Wilson', action: 'Submitted feedback', time: '1 hour ago', status: 'completed' },
    { user: 'Tom Brown', action: 'Requested refund', time: '2 hours ago', status: 'pending' }
  ];

  displayedColumns: string[] = ['user', 'action', 'time', 'status'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Admin Dashboard loaded');
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}
// company-dashboard.ts
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
import { CompanySidebarComponent } from '../company-sidebar/company-sidebar';

interface DashboardStats {
  title: string;
  value: string;
  icon: string;
  color: string;
  change: string;
  changeType: 'positive' | 'negative';
}

interface RecentOrder {
  orderNumber: string;
  product: string;
  date: string;
  amount: string;
  status: string;
}

@Component({
  selector: 'app-company-dashboard',
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
    CompanySidebarComponent
  ],
  templateUrl: './company-dashboard.html',
  styleUrls: ['./company-dashboard.scss']
})
export class CompanyDashboardComponent implements OnInit {
  stats: DashboardStats[] = [
    {
      title: 'Active Campaigns',
      value: '12',
      icon: 'campaign',
      color: '#10b981',
      change: '+3 this month',
      changeType: 'positive'
    },
    {
      title: 'Total Orders',
      value: '87',
      icon: 'shopping_cart',
      color: '#3b82f6',
      change: '+15 this month',
      changeType: 'positive'
    },
    {
      title: 'Total Spent',
      value: '$45,230',
      icon: 'attach_money',
      color: '#f59e0b',
      change: '+$8,420 this month',
      changeType: 'positive'
    },
    {
      title: 'Pending Invoices',
      value: '5',
      icon: 'receipt',
      color: '#ef4444',
      change: '2 overdue',
      changeType: 'negative'
    }
  ];

  recentOrders: RecentOrder[] = [
    { orderNumber: '#ORD-1234', product: 'Custom T-Shirts (500 units)', date: '2 days ago', amount: '$2,450', status: 'processing' },
    { orderNumber: '#ORD-1233', product: 'Branded Mugs (200 units)', date: '5 days ago', amount: '$890', status: 'shipped' },
    { orderNumber: '#ORD-1232', product: 'Business Cards (1000 units)', date: '1 week ago', amount: '$320', status: 'delivered' },
    { orderNumber: '#ORD-1231', product: 'Promotional Pens (1000 units)', date: '1 week ago', amount: '$540', status: 'delivered' },
    { orderNumber: '#ORD-1230', product: 'Custom Banners (10 units)', date: '2 weeks ago', amount: '$1,200', status: 'delivered' }
  ];

  displayedColumns: string[] = ['orderNumber', 'product', 'date', 'amount', 'status'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Company Dashboard loaded');
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}

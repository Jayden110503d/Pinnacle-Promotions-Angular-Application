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
import { MatDividerModule } from '@angular/material/divider';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar';
import { Chart } from 'chart.js/auto';

interface DashboardStats {
  title: string;
  value: string;
  icon: string;
  color: string;
  change: string;
  changeType: 'positive' | 'negative';
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
    MatDividerModule,
    AdminSidebarComponent
  ],
  templateUrl: './admin-dashboard.html',  // <-- Changed from .component.html to .html
  styleUrls: ['./admin-dashboard.scss']   // <-- Changed from .component.scss to .scss
})
export class AdminDashboardComponent implements OnInit {
  stats: DashboardStats[] = [
    {
      title: 'Tastings This Year',
      value: '342',
      icon: 'wine_bar',
      color: '#8b5cf6',
      change: '+18.4%',
      changeType: 'positive'
    },
    {
      title: 'Total Revenue',
      value: '$487,250',
      icon: 'attach_money',
      color: '#10b981',
      change: '+23.1%',
      changeType: 'positive'
    },
    {
      title: 'Total Profit',
      value: '$142,680',
      icon: 'trending_up',
      color: '#3b82f6',
      change: '+15.7%',
      changeType: 'positive'
    },
    {
      title: 'Awaiting Approval',
      value: '28',
      icon: 'pending_actions',
      color: '#f59e0b',
      change: '+5',
      changeType: 'negative'
    }
  ];

  // Chart instances
  revenueChart: any;
  profitChart: any;
  tastingsChart: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Admin Dashboard loaded');
    // Initialize charts after view init
    setTimeout(() => {
      this.createRevenueChart();
      this.createProfitChart();
      this.createTastingsChart();
    }, 100);
  }

  createRevenueChart(): void {
    const canvas = document.getElementById('revenueChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.revenueChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue ($)',
          data: [32000, 35000, 38000, 42000, 45000, 48000, 44000, 47000, 52000, 49000, 51000, 55000],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Monthly Revenue Trend'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }

  createProfitChart(): void {
    const canvas = document.getElementById('profitChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.profitChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Profit ($)',
          data: [8500, 9200, 10100, 11500, 12200, 13000, 11800, 12500, 14200, 13100, 13800, 15000],
          backgroundColor: '#3b82f6',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Monthly Profit'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }

  createTastingsChart(): void {
    const canvas = document.getElementById('tastingsChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.tastingsChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Scheduled', 'Pending Approval'],
        datasets: [{
          data: [258, 56, 28],
          backgroundColor: [
            '#10b981',
            '#f59e0b',
            '#ef4444'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Tastings Overview'
          }
        }
      }
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}
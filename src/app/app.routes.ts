// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },
  { path: '**', redirectTo: '/login' }
];
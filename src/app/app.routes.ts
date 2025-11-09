// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { AdminDashboardComponent } from '../app/admin/pages/admin-dashboard/admin-dashboard';
import { ManageProductsComponent } from '../app/admin/pages/manage-products/manage-products';
import { ManageUsersComponent } from '../app/admin/pages/manage-users/manage-users';
import { SettingsComponent } from '../app/admin/pages/settings/settings';
import { CompanyDashboardComponent } from '../app/company/pages/company-dashboard/company-dashboard';

export const routes: Routes = [
  // Default and authentication routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Admin routes
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin/manage-products', component: ManageProductsComponent },
  { path: 'admin/manage-users', component: ManageUsersComponent },
  { path: 'admin/settings', component: SettingsComponent },

  // Company routes
  { path: 'company-dashboard', component: CompanyDashboardComponent },

  // Fallback route
  { path: '**', redirectTo: '/login' }
];
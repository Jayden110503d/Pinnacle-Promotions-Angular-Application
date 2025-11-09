// login.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  isAdminLoading: boolean = false;
  isCompanyLoading: boolean = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onAdminLogin() {
    this.isAdminLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isAdminLoading = false;
      this.snackBar.open('Admin login successful!', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });

      // Navigate to admin dashboard
      this.router.navigate(['/admin-dashboard']);
    }, 1000);
  }

  onCompanyLogin() {
    this.isCompanyLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isCompanyLoading = false;
      this.snackBar.open('Company login successful!', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });

      // Navigate to company dashboard
      this.router.navigate(['/company-dashboard']);
    }, 1000);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
    AdminSidebarComponent
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent {
  // Profile Settings
  profile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Pinnacle Promotions',
    jobTitle: 'Administrator',
    timezone: 'America/New_York',
    language: 'en'
  };

  // Account Settings
  accountSettings = {
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketingEmails: true,
    weeklyReports: true,
    monthlyReports: true
  };

  // Security Settings
  securitySettings = {
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90'
  };

  // Appearance Settings
  appearanceSettings = {
    theme: 'light',
    compactMode: false,
    sidebarCollapsed: false
  };

  timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney'
  ];

  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' }
  ];

  themes = [
    { value: 'light', name: 'Light' },
    { value: 'dark', name: 'Dark' },
    { value: 'auto', name: 'Auto (System)' }
  ];

  sessionTimeouts = [
    { value: '15', name: '15 minutes' },
    { value: '30', name: '30 minutes' },
    { value: '60', name: '1 hour' },
    { value: '120', name: '2 hours' },
    { value: '0', name: 'Never' }
  ];

  passwordExpiries = [
    { value: '30', name: '30 days' },
    { value: '60', name: '60 days' },
    { value: '90', name: '90 days' },
    { value: '180', name: '180 days' },
    { value: '0', name: 'Never' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  saveProfileSettings(): void {
    console.log('Saving profile settings:', this.profile);
    this.snackBar.open('Profile settings saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  saveNotificationSettings(): void {
    console.log('Saving notification settings:', this.accountSettings);
    this.snackBar.open('Notification settings saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  saveSecuritySettings(): void {
    console.log('Saving security settings:', this.securitySettings);
    this.snackBar.open('Security settings saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  saveAppearanceSettings(): void {
    console.log('Saving appearance settings:', this.appearanceSettings);
    this.snackBar.open('Appearance settings saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  changePassword(): void {
    console.log('Change password clicked');
    this.snackBar.open('Password change dialog would open here', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  exportData(): void {
    console.log('Export data clicked');
    this.snackBar.open('Data export started. You will receive an email when ready.', 'Close', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  deleteAccount(): void {
    console.log('Delete account clicked');
    // In a real app, this would show a confirmation dialog
    this.snackBar.open('Account deletion requires confirmation', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  createdAt: string;
}

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    AdminSidebarComponent
  ],
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.scss']
})
export class ManageUsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'lastLogin', 'actions'];

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2025-11-09 10:30 AM',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Company Manager',
      status: 'active',
      lastLogin: '2025-11-09 09:15 AM',
      createdAt: '2024-02-20'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'User',
      status: 'active',
      lastLogin: '2025-11-08 04:45 PM',
      createdAt: '2024-03-10'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      role: 'Company Manager',
      status: 'inactive',
      lastLogin: '2025-11-05 02:20 PM',
      createdAt: '2024-04-05'
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tom.brown@example.com',
      role: 'User',
      status: 'suspended',
      lastLogin: '2025-10-28 11:00 AM',
      createdAt: '2024-05-12'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2025-11-09 08:00 AM',
      createdAt: '2024-06-18'
    },
    {
      id: 7,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: 'User',
      status: 'active',
      lastLogin: '2025-11-09 07:30 AM',
      createdAt: '2024-07-22'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      role: 'Company Manager',
      status: 'active',
      lastLogin: '2025-11-08 06:10 PM',
      createdAt: '2024-08-14'
    }
  ];

  searchTerm: string = '';
  selectedRole: string = 'all';
  selectedStatus: string = 'all';

  getStatusClass(status: string): string {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'suspended':
        return 'status-suspended';
      default:
        return '';
    }
  }

  addUser(): void {
    console.log('Add user clicked');
    // In a real app, this would open a dialog to add a new user
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    // In a real app, this would open a dialog to edit the user
  }

  deleteUser(user: User): void {
    console.log('Delete user:', user);
    // In a real app, this would show a confirmation dialog and then delete the user
  }

  viewDetails(user: User): void {
    console.log('View details:', user);
    // In a real app, this would navigate to user details page
  }

  suspendUser(user: User): void {
    console.log('Suspend user:', user);
    // In a real app, this would update the user status to suspended
  }

  activateUser(user: User): void {
    console.log('Activate user:', user);
    // In a real app, this would update the user status to active
  }

  resetPassword(user: User): void {
    console.log('Reset password for:', user);
    // In a real app, this would send a password reset email
  }

  get filteredUsers(): User[] {
    return this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
      const matchesStatus = this.selectedStatus === 'all' || user.status === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }
}

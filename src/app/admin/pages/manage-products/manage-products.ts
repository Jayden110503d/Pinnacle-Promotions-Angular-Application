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
import { MatCardModule } from '@angular/material/card';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  image: string;
  sku: string;
}

@Component({
  selector: 'app-manage-products',
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
    MatCardModule,
    AdminSidebarComponent
  ],
  templateUrl: './manage-products.html',
  styleUrls: ['./manage-products.scss']
})
export class ManageProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'stock', 'status', 'actions'];

  products: Product[] = [
    {
      id: 1,
      name: 'Custom T-Shirt',
      category: 'Apparel',
      price: 24.99,
      stock: 250,
      status: 'in-stock',
      image: '🎽',
      sku: 'TSH-001'
    },
    {
      id: 2,
      name: 'Promotional Mug',
      category: 'Drinkware',
      price: 12.99,
      stock: 15,
      status: 'low-stock',
      image: '☕',
      sku: 'MUG-002'
    },
    {
      id: 3,
      name: 'Business Card Holder',
      category: 'Office Supplies',
      price: 8.99,
      stock: 0,
      status: 'out-of-stock',
      image: '💼',
      sku: 'BCH-003'
    },
    {
      id: 4,
      name: 'Branded Cap',
      category: 'Apparel',
      price: 18.99,
      stock: 180,
      status: 'in-stock',
      image: '🧢',
      sku: 'CAP-004'
    },
    {
      id: 5,
      name: 'Tote Bag',
      category: 'Bags',
      price: 15.99,
      stock: 95,
      status: 'in-stock',
      image: '👜',
      sku: 'BAG-005'
    },
    {
      id: 6,
      name: 'Water Bottle',
      category: 'Drinkware',
      price: 22.99,
      stock: 8,
      status: 'low-stock',
      image: '💧',
      sku: 'WTR-006'
    },
    {
      id: 7,
      name: 'Notebook Set',
      category: 'Office Supplies',
      price: 14.99,
      stock: 120,
      status: 'in-stock',
      image: '📔',
      sku: 'NTB-007'
    },
    {
      id: 8,
      name: 'Pen Set',
      category: 'Office Supplies',
      price: 9.99,
      stock: 300,
      status: 'in-stock',
      image: '🖊️',
      sku: 'PEN-008'
    }
  ];

  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';

  categories = ['Apparel', 'Drinkware', 'Office Supplies', 'Bags'];

  getStatusClass(status: string): string {
    switch (status) {
      case 'in-stock':
        return 'status-in-stock';
      case 'low-stock':
        return 'status-low-stock';
      case 'out-of-stock':
        return 'status-out-of-stock';
      default:
        return '';
    }
  }

  getStockStatusText(status: string): string {
    switch (status) {
      case 'in-stock':
        return 'In Stock';
      case 'low-stock':
        return 'Low Stock';
      case 'out-of-stock':
        return 'Out of Stock';
      default:
        return status;
    }
  }

  addProduct(): void {
    console.log('Add product clicked');
    // In a real app, this would open a dialog to add a new product
  }

  editProduct(product: Product): void {
    console.log('Edit product:', product);
    // In a real app, this would open a dialog to edit the product
  }

  deleteProduct(product: Product): void {
    console.log('Delete product:', product);
    // In a real app, this would show a confirmation dialog and then delete the product
  }

  viewDetails(product: Product): void {
    console.log('View details:', product);
    // In a real app, this would navigate to product details page
  }

  updateStock(product: Product): void {
    console.log('Update stock for:', product);
    // In a real app, this would open a dialog to update stock
  }

  duplicateProduct(product: Product): void {
    console.log('Duplicate product:', product);
    // In a real app, this would create a copy of the product
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          product.sku.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'all' || product.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  get totalProducts(): number {
    return this.products.length;
  }

  get lowStockCount(): number {
    return this.products.filter(p => p.status === 'low-stock').length;
  }

  get outOfStockCount(): number {
    return this.products.filter(p => p.status === 'out-of-stock').length;
  }

  get totalValue(): number {
    return this.products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  }
}

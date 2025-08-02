import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCheck, faUserSlash, faUsers, faEllipsisV, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search'; // Pastikan path ini benar

@Component({
  selector: 'app-all-account-id',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './all-account-id.html',
  styleUrl: './all-account-id.css'
})
export class AllAccountId implements OnInit, OnDestroy {
  // Ikon-ikon
  faUsers = faUsers;
  faUserCheck = faUserCheck;
  faUserSlash = faUserSlash;
  faExclamationTriangle = faExclamationTriangle;
  faEllipsisV = faEllipsisV;

  private searchSubscription!: Subscription;

  // Data asli yang sudah diperbarui dengan informasi anomali
  private allAccounts = [
    { id: 'ACC001', name: 'John Doe', email: 'john.doe@example.com', status: 'Active', anomalyType: 'High-Value Transfer', anomalyDate: '2023-10-28', riskScore: 92 },
    { id: 'ACC002', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Active', anomalyType: 'Unusual Location', anomalyDate: '2023-10-27', riskScore: 75 },
    { id: 'ACC003', name: 'Peter Jones', email: 'peter.jones@example.com', status: 'Suspended', anomalyType: 'Multiple Failed Logins', anomalyDate: '2023-09-15', riskScore: 88 },
    { id: 'ACC004', name: 'Mary Williams', email: 'mary.w@example.com', status: 'Inactive', anomalyType: 'New Device Access', anomalyDate: '2023-05-01', riskScore: 45 },
    { id: 'ACC005', name: 'David Brown', email: 'david.b@example.com', status: 'Active', anomalyType: 'High-Value Transfer', anomalyDate: '2023-10-28', riskScore: 95 },
  ];

  public displayedAccounts = [...this.allAccounts];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.searchTerm$.subscribe(term => {
      this.filterAccounts(term);
    });
  }

  filterAccounts(searchTerm: string): void {
    if (!searchTerm) {
      this.displayedAccounts = [...this.allAccounts];
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      this.displayedAccounts = this.allAccounts.filter(account =>
        account.name.toLowerCase().includes(lowerCaseTerm) ||
        account.email.toLowerCase().includes(lowerCaseTerm) ||
        account.id.toLowerCase().includes(lowerCaseTerm) ||
        account.anomalyType.toLowerCase().includes(lowerCaseTerm)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  // Fungsi untuk mendapatkan kelas warna badge status
  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  }

  // Fungsi untuk mendapatkan kelas warna badge skor risiko
  getRiskScoreClass(score: number): string {
    if (score > 85) return 'bg-red-100 text-red-800';
    if (score > 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  }
}

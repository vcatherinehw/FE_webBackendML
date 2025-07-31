import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search'; // <-- 1. Impor SearchService

// Impor komponen lain yang digunakan di dasbor
import { TransactionCards } from '../components/transaction-cards/transaction-cards';
import { PieChart } from '../components/pie-chart/pie-chart';
import { TopRuleTriggered } from '../components/top-rule-triggered/top-rule-triggered';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TransactionCards, PieChart, TopRuleTriggered],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  private searchSubscription!: Subscription;
  
  
  private allTransactions = [
    { time: '15:05:30', id: 'TRX-001', activity: 'Payment Received' },
    { time: '15:01:00', id: 'TRX-002', activity: 'User Login' },
    { time: '14:51:18', id: 'TRX-003', activity: 'Data Exported' },
    { time: '14:45:05', id: 'TRX-004', activity: 'Password Reset' },
    { time: '14:38:22', id: 'TRX-005', activity: 'Profile Updated' },
    { time: '14:35:45', id: 'TRX-006', activity: 'API Call Failed' },
    { time: '14:32:10', id: 'TRX-007', activity: 'User Logout' }
  ];

  // Data yang akan ditampilkan di tabel (bisa berubah)
  public displayedTransactions = [...this.allTransactions];

  // 2. Suntikkan SearchService di constructor
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // 3. Subscribe untuk mendapatkan istilah pencarian dari service
    this.searchSubscription = this.searchService.searchTerm$.subscribe(term => {
      this.filterTransactions(term);
    });
  }

  /**
   * 4. Fungsi untuk memfilter data transaksi.
   * @param searchTerm - Istilah yang diketik pengguna di navbar.
   */
  filterTransactions(searchTerm: string): void {
    if (!searchTerm) {
      // Jika bar pencarian kosong, tampilkan semua transaksi
      this.displayedTransactions = [...this.allTransactions];
    } else {
      // Jika ada istilah pencarian, filter data
      const lowerCaseTerm = searchTerm.toLowerCase();
      this.displayedTransactions = this.allTransactions.filter(transaction => 
        transaction.activity.toLowerCase().includes(lowerCaseTerm) ||
        transaction.id.toLowerCase().includes(lowerCaseTerm)
      );
    }
  }

  ngOnDestroy(): void {
    // 5. Unsubscribe untuk mencegah kebocoran memori saat komponen dihancurkan
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}

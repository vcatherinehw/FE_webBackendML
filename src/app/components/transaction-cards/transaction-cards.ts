import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Impor CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faFileLines,
  faExclamationTriangle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-cards',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // <-- Tambahkan CommonModule di sini
  templateUrl: './transaction-cards.html',
  // styleUrl: './transaction-cards.css' // Anda bisa menambahkan ini jika punya file CSS
})
export class TransactionCards implements OnInit {
  // Ikon Anda yang sudah ada
  faChartLine = faChartLine;
  faFileLines = faFileLines;
  faExclamationTriangle = faExclamationTriangle;
  faUser = faUser;

  // Objek untuk menyimpan semua set data
  private allData: any = {
    Daily: {
      currentTransactions: '6,000,000',
      majorSource: 'M TRX',
      anomaliesDetected: '200,000',
      accountsDetected: '15,000',
    },
    Weekly: {
      currentTransactions: '45,000,000',
      majorSource: 'Web TRX',
      anomaliesDetected: '1,500,000',
      accountsDetected: '110,000',
    },
    Monthly: {
      currentTransactions: '180,000,000',
      majorSource: 'API',
      anomaliesDetected: '5,800,000',
      accountsDetected: '450,000',
    },
  };

  // Properti untuk menampung data yang sedang ditampilkan
  public displayData: any;

  constructor() { }

  ngOnInit(): void {
    // Atur data 'Daily' sebagai default saat komponen pertama kali dimuat
    this.displayData = this.allData.Daily;
  }

  /**
   * Fungsi ini dipanggil setiap kali nilai dropdown berubah.
   * @param event - Event dari elemen <select>
   */
  onTimeframeChange(event: any): void {
    const selectedValue = event.target.value;
    this.displayData = this.allData[selectedValue];
  }
}

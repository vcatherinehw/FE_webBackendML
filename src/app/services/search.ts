import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Subject untuk menampung dan share istilah pencarian
  private searchTerm = new Subject<string>();

  // Observable yang bisa di-subscribe oleh komponen lain
  public searchTerm$ = this.searchTerm.asObservable();

  /**
   * Fungsi untuk memperbarui istilah pencarian dari komponen mana pun.
   * @param term - Istilah pencarian dari input.
   */
  updateSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }
}

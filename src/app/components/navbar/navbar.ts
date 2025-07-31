import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSearch, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;
  faTimes=faTimes;
  isSearchVisible = false;

  constructor(private searchService: SearchService) {}

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.searchService.updateSearchTerm(searchTerm); // Kirim istilah ke service
  }
  
}

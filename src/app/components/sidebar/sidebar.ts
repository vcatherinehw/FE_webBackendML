import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faDatabase,
  faChartLine,
  faEnvelope,
  faBell,
  faUsers,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  faHome = faHome;
  faDatabase = faDatabase;
  faChartLine = faChartLine;
  faEnvelope = faEnvelope;
  faBell = faBell;
  faUsers = faUsers;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
}

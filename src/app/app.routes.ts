import { Routes } from '@angular/router';
// Change the import path to match your filename
import { DashboardComponent } from './dashboard/dashboard'; 
import { AnomalyList } from './anomaly-list/anomaly-list';
import { Notification } from './notification/notification';

export const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'anomaly-list', 
    component: AnomalyList
  },
  {
    path: 'notification', 
    component: Notification
  },
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
];
import { Routes } from '@angular/router';
// Change the import path to match your filename
import { DashboardComponent } from './dashboard/dashboard'; 
import { AnomalyList } from './anomaly-list/anomaly-list';
import { Notification } from './notification/notification';
import { Models } from './models/models';
import { AllAccountId } from './all-account-id/all-account-id';
import { Profile } from './profile/profile';

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
    path: 'models', 
    component: Models
  },
  {
    path: 'all-account-id', 
    component: AllAccountId
  },
  {
    path: 'profile', 
    component: Profile
  },
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
];
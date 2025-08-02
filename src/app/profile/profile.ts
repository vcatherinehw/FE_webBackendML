import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user = {
    name: 'Dion',
    username: 'diononn',
    email: 'dion@example.com',
    role: 'Data Scientist',
    memberSince: '2023-01-15',
    avatarUrl: '/assets/avatar.png'
  };


  activityLog = [
    { action: 'Logged In', date: '2023-10-29 10:05 AM', ip: '192.168.1.1' },
    { action: 'Updated Profile', date: '2023-10-28 03:22 PM', ip: '192.168.1.1' },
    { action: 'Viewed Anomaly List', date: '2023-10-28 03:20 PM', ip: '192.168.1.1' },
    { action: 'Logged Out', date: '2023-10-27 06:00 PM', ip: '10.0.0.5' },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-rule-triggered',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-rule-triggered.html',
  styleUrl: './top-rule-triggered.css',
})
export class TopRuleTriggered {
  faEllipsisV = faEllipsisV;

  rules = [
    {
      id: 1,
      category: '',
      description: [
        { text: 'Lorem ipsum dolor sit amet', count: 7 },
        { text: 'Lorem ipsum dolor sit amet', count: 4 },
      ],
    },
    {
      id: 2,
      category: 'Lorem',
      description: [
        { text: 'Multiple attempts', count: 6 },
        { text: 'Failed PIN verification', count: 5 },
      ],
    },
    {
      id: 3,
      category: 'Ipsum',
      description: [{ text: 'High value in short time', count: 7 }],
    },
    {
      id: 4,
      category: 'Risk',
      description: [
        { text: 'Transaction from unusual location', count: 5 },
        { text: 'VPN or Proxy usage detected', count: 4 },
      ],
    },
    {
      id: 5,
      category: 'Limit',
      description: [
        { text: 'Too many transactions in 1 hour', count: 12 },
        { text: 'Different merchant categories', count: 6 },
      ],
    },
    {
      id: 6,
      category: 'Risk',
      description: [
        { text: 'New device login', count: 3 },
        { text: 'Rooted device detected', count: 3 },
      ],
    },
    {
      id: 7,
      category: 'Fraud',
      description: [
        { text: 'Suspicious merchant behavior', count: 4 },
        { text: 'Mismatched billing info', count: 2 },
      ],
    },
    {
      id: 8,
      category: 'Geo',
      description: [
        { text: 'Access from restricted country', count: 5 },
        { text: 'IP mismatch with region', count: 3 },
      ],
    },
    {
      id: 9,
      category: 'Behavior',
      description: [
        { text: 'Unusual transaction pattern', count: 9 },
        { text: 'Rapid login/logout activity', count: 4 },
      ],
    },
    {
      id: 10,
      category: 'Device',
      description: [
        { text: 'Multiple device usage detected', count: 6 },
        { text: 'Lorem ipsum dolor sit amet', count: 2 },
      ],
    },
    {
      id: 11,
      category: 'Device',
      description: [
        { text: 'Multiple device usage detected', count: 6 },
        { text: 'Lorem ipsum dolor sit amet', count: 2 },
      ],
    },
    {
      id: 12,
      category: 'Device',
      description: [
        { text: 'Multiple device usage detected', count: 6 },
        { text: 'Lorem ipsum dolor sit amet', count: 2 },
      ],
    },
    {
      id: 12,
      category: 'Device',
      description: [
        { text: 'Multiple device usage detected', count: 6 },
        { text: 'Lorem ipsum dolor sit amet', count: 2 },
      ],
    },
  ];
}

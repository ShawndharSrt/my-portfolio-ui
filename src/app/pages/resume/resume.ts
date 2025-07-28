import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fadeSlideIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  animations: [fadeSlideIn],
})
export class Resume implements OnInit {

  sectionTitle = 'Resume';
  sectionSubtitle = 'A snapshot of my professional journey.';

  summary = {
    name: 'Shawndhar B',
    description: 'A results-driven full stack developer with 3+ years of experience delivering scalable web applications in Agile environments.',
    details: [
      { text: 'Chennai, Tamil Nadu, India' },
      { text: '+91 63821 23904' },
      { text: 'b.p.shawndharsrt10@gmail.com' }
    ]
  };

  education = [
    {
      degree: 'Bachelor of Engineering - B.E, Civil Engineering',
      period: '2018 - 2021',
      place: ' Nandha Engineering College',
      description: 'Scored average of <strong>8.05 CGPA</strong> out of 10 over 8 semester'
    },
    {
      degree: 'Biology, General',
      period: '2016 - 2017',
      place: 'Adharsh Vidhayala Higher Secondary School',
      description: 'Completed HSC with <strong>80%</strong> marks '
    },
    {
      degree: 'Biology, General',
      period: '2011 - 2015',
      place: 'Adharsh Vidhayala Higher Secondary School',
      description: 'Secured <strong>98%</strong> in SSLC examinations'
    }
  ];

  experience = [
    {
      role: 'Associate Software Engineer',
      period: 'Apr 2025 - Present | Chennai, Tamil Nadu, India',
      place: ' Nandha Engineering College',
      responsibilities: [
        'Lead design and implementation of communication materials.',
        'Supervised 7-member design team and managed project quality.',
        'Managed production budgets from $2,000 to $25,000.'
      ]
    },
    {
      role: 'Software Engineer',
      period: 'Apr 2024 - Jul 2025 | Stepping Stone Advertising',
      place: ' Nandha Engineering College',
      responsibilities: [
        'Developed logos, brochures, infographics, and ads.',
        'Handled up to 5 projects simultaneously under pressure.',
        'Presented 4+ design proposals monthly to stakeholders.'
      ]
    }
  ];

  ngOnInit(): void { }

}

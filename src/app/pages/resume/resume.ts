import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fadeSlideIn } from '../../shared/animations/animations';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Loader } from '../../shared/components/loader/loader';
import { LoaderService } from '../../shared/services/loader-service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, FontAwesomeModule, Loader],
  standalone: true,
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  animations: [fadeSlideIn],
})
export class Resume implements OnInit {

  faDownload = faDownload;
  sectionTitle = 'Resume';
  sectionSubtitle = 'A snapshot of my professional journey.';

  constructor(private loader: LoaderService) { }

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
      description: 'Scored average of <strong>8.05 CGPA</strong> out of 10 over 8 semesters'
    },
    {
      degree: 'Biology, General',
      period: '2016 - 2017',
      place: 'Adharsh Vidhayala Higher Secondary School',
      description: 'Completed HSC with <strong>80%</strong> marks'
    },
    {
      degree: 'Biology, General',
      period: '2011 - 2015',
      place: 'Adharsh Vidhayala Higher Secondary School',
      description: 'Secured <strong>98%</strong> marks in SSLC examinations'
    }
  ];

  experience = [
    {
      role: 'Associate Software Engineer',
      period: 'Apr 2025 - Present | Chennai, Tamil Nadu, India',
      place: 'Clarium Tech Private Limited - US Based Banking',
      responsibilities: [
        'Collaborating with cross-functional teams to design, develop, and maintain enterprise-grade banking modules using Angular and Java Spring Boot.',
        'Implementing secure RESTful APIs and integrating MongoDB for document-based data storage and complex querying.'
      ]
    },
    {
      role: 'Software Engineer',
      period: 'Apr 2024 - Jul 2025 | Chennai, Tamil Nadu, India',
      place: 'Clarium Tech Private Limited - US Based Banking',
      responsibilities: [
        'Developed dynamic PDF reports using iText library to generate complex tabular data layouts in real time.',
        'Utilized Apache POI to create automated and stylized Excel reports from Java services',
        'Optimized MongoDB queries including aggregation pipelines and indexing strategies to improve data retrieval performance.'
      ]
    },
    {
      role: 'Trainee Software Engineer',
      period: 'Jan 2022 - Apr 2024 | Chennai, Tamil Nadu, India',
      place: 'Clarium Tech Private Limited - US Based Banking',
      responsibilities: [
        'Built responsive user interfaces using Syncfusion Angular UI components',
        'Conducted a POC on Drools to integrate business rule management for the loan processing module.',
        'Deployed containerized application to production environments using Docker and Jenkins pipelines',
        'Participated in regular sprint planning, demos, and retrospectives as part of the agile team'
      ]
    }
  ];

  ngOnInit(): void { }

  downloadResume() {
    this.loader.show();
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'assets/pdf/Shawndhar B - Resume.pdf';
      link.download = 'Shawndhar-Resume.pdf';
      link.click();
      this.loader.hide();
    }, 4000);
  }

}

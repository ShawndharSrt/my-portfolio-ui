import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class About implements OnInit, AfterViewInit {

  animatedSkills: number[] = [];
  skills = [
    { name: 'JAVA', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JAVASCRIPT', value: 75 },
    { name: 'PHP', value: 80 },
    { name: 'WORDPRESS/CMS', value: 90 },
    { name: 'PHOTOSHOP', value: 55 },
  ];

  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.animatedSkills = this.skills.map(() => 0);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.skills.forEach((skill, index) => {
        setTimeout(() => {
          this.animatedSkills[index] = skill.value;
        }, index * 150); // staggered animation
      });
    }, 300); // initial delay
  }

}

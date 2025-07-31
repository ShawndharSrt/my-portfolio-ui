import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlideIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [fadeSlideIn],
})
export class About implements OnInit, AfterViewInit {

  animatedSkills: number[] = [];
  isLoading: boolean = true;
  skills = [
    { name: 'JAVA', value: 100 },
    { name: 'TYPESCRIPT', value: 90 },
    { name: 'MONGODB', value: 75 },
    { name: 'SPRING BOOT', value: 80 },
    { name: 'JENKINS', value: 90 },
    { name: 'HTML', value: 55 },
    { name: 'SCSS', value: 55 },
  ];

  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.animatedSkills = this.skills.map(() => 0);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.skills.forEach((skill, index) => {
        setTimeout(() => {
          this.animatedSkills[index] = skill.value;
          this.cdr.detectChanges();
        }, index * 150);
      });
    }, 300);
  }

}

import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeSlideIn = trigger('fadeSlideIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

import { Component } from '@angular/core';
import { fadeSlideIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-certification',
  imports: [],
  standalone: true,
  templateUrl: './certification.html',
  styleUrl: './certification.scss',
  animations: [fadeSlideIn]
})
export class Certification {

  sectionTitle = 'Certification';
  sectionSubtitle = 'In-Progress';

}

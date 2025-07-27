import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn
  faTwitter = faTwitter
  faEnvelope = faEnvelope

}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation, faMapLocationDot, faMobile, faMobileAlt, faMobileAndroid, faMobileAndroidAlt, faMobileButton, faMobileRetro, faMobileScreenButton, faMobileVibrate, faPhone, faSearchLocation, faTeletype, faTelevision } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { fadeSlideIn } from '../../shared/animations/animations';


@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [fadeSlideIn],
})
export class Contact {

  contactForm: FormGroup;
  faEnvelope = faEnvelope;
  faLocation = faLocationDot;
  faCall = faPhone

  constructor(private fb: FormBuilder, private snackbar: SnackbarService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.snackbar.success('Submitted successfully!');
      this.contactForm.reset();
    } else {
      this.snackbar.error('Please fill all required fields!');
    }
  }
}

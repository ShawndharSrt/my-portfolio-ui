import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { fadeSlideIn } from '../../shared/animations/animations';
import { ContactServices } from './services/contact-services';
import { ContactInfo } from './models/contact';


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
  faCall = faPhone;
  private destroyRef = inject(DestroyRef);

  constructor(private fb: FormBuilder, private snackbar: SnackbarService, 
    private contactService: ContactServices) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactInfo: ContactInfo = this.contactForm.getRawValue();
      this.contactService.postMessage(contactInfo).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.snackbar.success('Submitted successfully!');
        this.contactForm.reset();
      })
    } else {
      this.snackbar.error('Please fill all the fields!');
    }
  }
}

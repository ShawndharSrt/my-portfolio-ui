import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  themeService = inject(ThemeService);
  isMenuOpen : boolean = false;
  navLinks : { label:string, href: string }[] = [
    { label: 'Home', href: '' },
    { label: 'About', href: 'about' },
    { label: 'Resume', href: 'resume' },
    { label: 'Certification', href: 'certification' },
    { label: 'Contact', href: 'contact' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

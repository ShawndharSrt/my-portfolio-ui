import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = signal<boolean>(false);
  readonly isDarkMode = this.darkMode.asReadonly();

  constructor() {
    if(typeof window !== 'undefined' && typeof localStorage !== 'undefined'){
    const savedTheme = localStorage.getItem('item');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.darkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));

    effect(()=>{
      document.body.classList.toggle('dark-theme', this.darkMode());
      localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
    });
  }
  }

  toggleTheme(): void {
    this.darkMode.update(current => !current);
  }
  
}

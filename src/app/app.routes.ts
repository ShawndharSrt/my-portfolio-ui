import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Resume } from './pages/resume/resume';
import { About } from './pages/about/about';
import { Certification } from './pages/certification/certification';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'resume', component: Resume },
    { path: 'certification', component: Certification },
    { path: 'contact', component: Contact }
];

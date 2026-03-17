import { Routes } from '@angular/router';
// Update the import to match the actual exported member from dashboard.ts
import { DashboardComponent } from './components/dashboard/dashboard';
import { Register } from './components/register/register';
import { FindDonor } from './components/find-donor/find-donor';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'register', component: Register},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'find-donor', component: FindDonor}    
];

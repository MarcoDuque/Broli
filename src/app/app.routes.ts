import { Routes } from '@angular/router';
import { HomeComponent } from './articles/home/home.component';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./auth/auth.routes')
            .then(m => m.auth_routes)
    },
    {
        path: 'home', component: HomeComponent
    }
];

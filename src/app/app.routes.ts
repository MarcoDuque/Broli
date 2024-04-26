import { Routes } from '@angular/router';
import { HomeComponent } from './articles/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomerHomeComponent } from './articles/customers/customer-home/customer-home.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'customers', component: CustomerHomeComponent
    }
];

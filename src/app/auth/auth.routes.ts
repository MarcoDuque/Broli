import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../articles/home/home.component';
import { CustomerHomeComponent } from '../articles/customers/customer-home/customer-home.component';

export const auth_routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'Home', component: HomeComponent
    },
    {
        path: 'Customers', component: CustomerHomeComponent
    }
];
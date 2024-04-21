import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MainNavComponent } from "../../shared/main-nav/main-nav.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        NavbarComponent,
        MainNavComponent
    ]
})
export class HomeComponent {

}

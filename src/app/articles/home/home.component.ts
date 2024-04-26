import { Component } from '@angular/core';
import { MainNavComponent } from "../../shared/main-nav/main-nav.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MainNavComponent
    ]
})
export class HomeComponent {

}

import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-customers-info',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule
  ],
  providers: [  
    MatDatepickerModule,
    provideNativeDateAdapter()
  ],
  templateUrl: './customers-info.component.html',
  styleUrl: './customers-info.component.css'
})
export class CustomersInfoComponent {
  
}

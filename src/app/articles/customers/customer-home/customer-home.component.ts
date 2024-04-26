import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from '../../../core/services/modal.service';
import { CustomersInfoComponent } from '../customers-info/customers-info.component';
import { ModalComponent } from '../../../shared/modal/modal.component';


@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [ModalService],
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css'
})
export class CustomerHomeComponent {
  constructor(private modalService: ModalService) { }

  openModal(): void {
    this.modalService.openModal(CustomersInfoComponent);
  }

}

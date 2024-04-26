import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CustomersInfoComponent } from '../../articles/customers/customers-info/customers-info.component';

@Injectable()
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(component: any): void {
    this.dialog.open(ModalComponent, {
      data: {
        component: component
      }
    });
  }
}
import { Injectable } from '@angular/core';
import { StudentRegistration } from '../../Models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private selectedClient: StudentRegistration | null = null;

  setSelectedClient(student: StudentRegistration) {
    this.selectedClient = student;
  }

  getSelectedClient(): StudentRegistration | null {
    return this.selectedClient;
  }
}

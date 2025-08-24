import { AllCommunityModule, ColDef, ICellRendererParams, ModuleRegistry } from 'ag-grid-community';
import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { StudentRegistration } from '../../Models/client.model';
import { ClientServiceService } from '../client-service/client-service.service';
import { Router } from '@angular/router';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, AfterViewInit {

  colDefs: ColDef[] = [
    { field: "firstName", filter: true },
    { field: "lastName", filter: true },
    { 
      headerName: "Details", 
      cellRenderer: (params: ICellRendererParams) => {
        return `<button id="btn-${params.data.idNumber}">View ${params.data.firstName}'s Details</button>`;
      }
    }
  ];

  registrations: StudentRegistration[] = [];

  constructor(private renderer: Renderer2, private router: Router, private clientService: ClientServiceService) {}

  ngOnInit(): void {
    this.registrations = [
{
        firstName: "מיה",
        lastName: "כהן",
        phone: "050-1234567",
        idNumber: "123456789",
        lesson: "שיעור יוגה",
        price: 600,
        isPaid: true
    },
    {
        firstName: "נועה",
        lastName: "לוי",
        phone: "052-7654321",
        idNumber: "987654321",
        lesson: "שיעור זומבה",
        price: 500,
        isPaid: false
    },
    {
        firstName: "תמר",
        lastName: "שטרן",
        phone: "053-1122334",
        idNumber: "456789123",
        lesson: "שיעור פילאטיס",
        price: 450,
        isPaid: true
    },
    {
        firstName: "דניאל",
        lastName: "מאור",
        phone: "054-2233445",
        idNumber: "321654987",
        lesson: "שיעור קיקבוקסינג",
        price: 550,
        isPaid: false
    },
    {
        firstName: "אבנר",
        lastName: "ברק",
        phone: "055-3344556",
        idNumber: "654321789",
        lesson: "שיעור אירובי",
        price: 400,
        isPaid: true
    }    ];
      if (true) {
    throw new Error('💥 check with ng test: שגיאה מכוונת בזמן ריצה');
  };}

  ngAfterViewInit(): void {
    this.setButtonStyles(); // הגדר סגנונות לאחר שהקומפוננטה נטענה
  }

  onGridReady(params: any) {
    params.api.forEachNode((node: any) => {
      const button = document.getElementById(`btn-${node.data.idNumber}`);
      if (button) {
        button.removeEventListener('click', () => this.viewClientDetails(node.data)); // הסרת אירוע קודם
        button.addEventListener('click', () => this.viewClientDetails(node.data));
      }
    });
    this.setButtonStyles(); // הגדר סגנונות לאחר שהגריד מוכן
  }

  setButtonStyles() {
    this.registrations.forEach(registration => {
      const button = document.getElementById(`btn-${registration.idNumber}`);
      if (button) {
        if (registration.isPaid === false) {
          this.renderer.setStyle(button, 'background-color', 'red');
          this.renderer.setStyle(button, 'color', 'white');
        } else {
          this.renderer.removeStyle(button, 'background-color');
          this.renderer.removeStyle(button, 'color');
        }
      }
    });
  }

  viewClientDetails(client: StudentRegistration) {
    this.clientService.setSelectedClient(client);
    this.router.navigate(['../clientDetails']);
  }
}

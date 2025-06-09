import { Component, Input, OnInit } from '@angular/core';
import { StudentRegistration } from '../../../Models/client.model';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../client-service/client-service.service';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})

export class ClientDetailsComponent  implements OnInit {
  student: StudentRegistration | null = null;

  constructor(private route: ActivatedRoute, private clientService: ClientServiceService) {}

  ngOnInit() {
    this.student = this.clientService.getSelectedClient();
  }
  // @Input() lesson: Lesson | null = null;

}

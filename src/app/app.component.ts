import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoValidComponent } from "./no-valid/no-valid.component";
import { LessonsModule } from './lessons/lessons.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudioProject';
  columnDefs = [
    { headerName: 'שם', field: 'name' },
    { headerName: 'גיל', field: 'age' }
  ];

  rowData = [
    { name: 'יוסי', age: 25 },
    { name: 'מיכל', age: 30 }
  ];
}

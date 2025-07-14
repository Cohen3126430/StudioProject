import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoValidComponent } from './no-valid/no-valid.component';
import { ClientsComponent } from './clients/client-list/clients.component';
import { LessonsListComponent } from './lessons/lesson-list/lesson-list.component';
import { LessonDetailsComponent } from './lessons/lesson-details/lesson-details.component';
import { NgModule } from '@angular/core';
import { ClientDetailsComponent } from './clients/client-details/client-details/client-details.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'lessonsList', component: LessonsListComponent },
    { path: 'lessonDetails', component: LessonDetailsComponent },
    { path: 'clientDetails', component: ClientDetailsComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: NoValidComponent }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }
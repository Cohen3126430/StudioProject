import { Component, OnInit, QueryList, ViewChildren, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Lesson } from '../../Models/lesson.model';
import { NgFor, NgIf } from '@angular/common';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { Router } from '@angular/router';
import { LessonService } from '../lesson-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, LessonDetailsComponent,MatTooltipModule,MatButtonModule],
})
export class LessonsListComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private router: Router, private lessonService: LessonService) {} // הוסף את Router כאן

  @ViewChildren('lessonItem') lessonItems!: QueryList<ElementRef>;

  current_date = Date.now();
  lessons: Lesson[] = []; // מערך שיעורים

  ngOnInit() {
    this.lessons = [
      {
        lessonName: 'שיעור יוגה',
        teacherName: 'מר אבנר',
        numberOfSessions: 12,
        startDate: new Date('2025-10-01'),
        price: 600,
        day: 'שני',
        time: '09:00'
      },
      {
        lessonName: 'שיעור זומבה',
        teacherName: 'גברת מיה',
        numberOfSessions: 10,
        startDate: new Date('2025-10-05'),
        price: 500,
        day: 'רביעי',
        time: '17:00'
      },
      {
        lessonName: 'שיעור פילאטיס',
        teacherName: 'מר דניאל',
        numberOfSessions: 8,
        startDate: new Date('2025-10-10'),
        price: 450,
        day: 'חמישי',
        time: '18:00'
      },
      {
        lessonName: 'שיעור קיקבוקסינג',
        teacherName: 'מר יוסי',
        numberOfSessions: 10,
        startDate: new Date('2025-05-15'),
        price: 550,
        day: 'שלישי',
        time: '20:00'
      },
      {
        lessonName: 'שיעור אירובי',
        teacherName: 'גברת תמר',
        numberOfSessions: 6,
        startDate: new Date('2025-10-20'),
        price: 400,
        day: 'שישי',
        time: '07:00'
      }
    ];
  }

  ngAfterViewInit() {
    this.lessons.forEach((lesson, index) => {
      console.log("lessonItems : "+this.lessonItems.toArray());
        console.log("lessons : "+this.lessons);
      if (lesson?.startDate.getTime() < this.current_date) {
        const lessonElement = this.lessonItems.toArray()[index].nativeElement; // קבלת האלמנט המתאים
        this.renderer.setProperty(lessonElement, 'id', 'begining');
        this.renderer.setStyle(lessonElement, 'background-color', 'aqua');
      }
    });
  }

  selectedLesson: Lesson | null = null;

  selectLesson(lesson: Lesson) {
    this.lessonService.setSelectedLesson(lesson); // שמור את השיעור בשירות
    this.router.navigate(['../lessonDetails']); 
  }
}

 
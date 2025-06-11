import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../../Models/lesson.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; 
import { NgClass, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../lesson-service.service';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgClass, NgStyle],
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css'],
})
export class LessonDetailsComponent implements OnInit {
  @Input() lesson: Lesson | null = null;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) {}

  ngOnInit() {
    this.lesson = this.lessonService.getSelectedLesson();
  }

  hasLessonStarted(lesson: any): boolean {
    const now = new Date();
    return lesson.startDate < now;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../../Models/lesson.model';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../lesson-service.service';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent  implements OnInit {
  lesson: Lesson | null = null;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) {}

  ngOnInit() {
    this.lesson = this.lessonService.getSelectedLesson(); // קבל את השיעור מהשירות
  }
  // @Input() lesson: Lesson | null = null;

}

import { Injectable } from '@angular/core';
import { Lesson } from '../Models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private selectedLesson: Lesson | null = null;

  setSelectedLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }

  getSelectedLesson(): Lesson | null {
    return this.selectedLesson;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListComponent } from './lesson-list.component';

describe('LessonListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

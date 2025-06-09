import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoValidComponent } from './no-valid.component';

describe('NoValidComponent', () => {
  let component: NoValidComponent;
  let fixture: ComponentFixture<NoValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoValidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

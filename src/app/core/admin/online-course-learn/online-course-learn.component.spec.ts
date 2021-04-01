import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseLearnComponent } from './online-course-learn.component';

describe('OnlineCourseLearnComponent', () => {
  let component: OnlineCourseLearnComponent;
  let fixture: ComponentFixture<OnlineCourseLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

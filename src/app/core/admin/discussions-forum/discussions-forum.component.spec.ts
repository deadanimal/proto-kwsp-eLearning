import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsForumComponent } from './discussions-forum.component';

describe('DiscussionsForumComponent', () => {
  let component: DiscussionsForumComponent;
  let fixture: ComponentFixture<DiscussionsForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionsForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionsForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

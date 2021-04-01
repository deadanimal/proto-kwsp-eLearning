import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-course-learn',
  templateUrl: './online-course-learn.component.html',
  styleUrls: ['./online-course-learn.component.scss']
})
export class OnlineCourseLearnComponent implements OnInit {

  oneAtATime
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goPageCourses() {
    this.router.navigate(['/admin/online-course'])
  }

}

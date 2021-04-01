import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-course',
  templateUrl: './online-course.component.html',
  styleUrls: ['./online-course.component.scss']
})
export class OnlineCourseComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goPageLearn() {
    this.router.navigate(['/admin/online-course-learn'])
  }

}

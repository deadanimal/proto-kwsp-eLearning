import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { CalenderComponent } from './calender/calender.component';
import { OnlineCourseComponent } from './online-course/online-course.component';
import { ExamsComponent } from './exams/exams.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { ResultsComponent } from './results/results.component';
import { DiscussionsForumComponent } from './discussions-forum/discussions-forum.component';
import { OnlineCourseLearnComponent } from './online-course-learn/online-course-learn.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    CalenderComponent,
    OnlineCourseComponent,
    ExamsComponent,
    DiscussionsComponent,
    ExamQuestionsComponent,
    ResultsComponent,
    DiscussionsForumComponent,
    OnlineCourseLearnComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }

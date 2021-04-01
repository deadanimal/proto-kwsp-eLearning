import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'online-course',
                component: OnlineCourseComponent
            },
            {
                path: 'online-course-learn',
                component: OnlineCourseLearnComponent
            },
            {
                path: 'exams',
                component: ExamsComponent
            },
            {
                path: 'exam-questions',
                component: ExamQuestionsComponent
            },
            {
                path: 'results',
                component: ResultsComponent
            },
            {
                path: 'calendar',
                component: CalenderComponent
            },
            {
                path: 'discussions',
                component: DiscussionsComponent
            },
            {
                path: 'discussions-forum',
                component: DiscussionsForumComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]
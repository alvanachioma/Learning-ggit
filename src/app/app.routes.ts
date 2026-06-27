import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home';
import {ObjComponent} from '../pages/obj';
import {ExamQuestion} from '../pages/exam-question';
import {GridPracticeComponent} from '../pages/grid-practice';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'exam',
    component:ExamQuestion
  },

  {
    path:'**',
    redirectTo:'home'
  },
];

import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home';
import {ObjComponent} from '../pages/obj';
import {ExamQuestion} from '../pages/exam-question';
import {GridPracticeComponent} from '../pages/grid-practice';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'obj',
    component:ObjComponent
  },
  {
    path:'exam',
    component:ExamQuestion
  },

  {
    path:'grid',
    component:GridPracticeComponent
  },
];

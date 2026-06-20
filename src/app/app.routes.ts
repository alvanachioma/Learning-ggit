import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home';
import {ObjComponent} from '../pages/obj';
import {ExamQuestion} from '../pages/exam-question';

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
];

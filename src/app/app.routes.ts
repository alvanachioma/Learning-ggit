import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home';
import {ObjComponent} from '../pages/obj';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'obj',
    component:ObjComponent
  },
];

import {signal} from '@angular/core';

export interface ExaminationModel {
  id: number;
  title: string;
  text: string;
  questions: string;
  options: string;
}

export const examinationmodel = signal<ExaminationModel>({
  id: 0,
  title: '',
  text: '',
  questions: '',
  options: '',
});

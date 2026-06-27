import {Component, inject, signal} from '@angular/core';
import {ExamQuestionService} from '../shared/examination-proj/services/exam-question-services';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'mastering-git',
  imports: [
    RouterLink
  ],
  template: `
    <div class="flex justify-center items-center flex-col">
      <div class="text-4xl mb-5">Select an Exam you wish to take</div>
      @for (st of examsList; track $index) {
        <a class="px-6 py-4 ring-2 hover:ring-4 block lg:w-[60%]
        hover:ring-offset-orange-600 hover:bg-orange-800 hover:text-white duration-300
        ring-orange-400 bg-orange-50/30 text-orange-700 font-bold rounded-xl mb-4 " [routerLink]="['/exam']" [queryParams]="{id: st.id()}">
          {{ st.title() }}  <span class="text-green-700">
          @if (st.duration.hour > 0) {
          <span>{{ st.duration.hour }}hr </span>
        }
          @if (st.duration.minute > 0) {
            <span>: {{ st.duration.minute }}min</span>
          }
          @if (st.duration.second > 0) {
            <span>: {{ st.duration.second }}sec</span>
          }</span>
        </a>
      }



    </div>
  `
})
export class HomeComponent {
  readonly title = signal("Mastering Git Version Control");
  examService = inject(ExamQuestionService);
  examsList = this.examService.getExamList();

}

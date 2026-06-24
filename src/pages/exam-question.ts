import {Component, computed, signal,inject} from '@angular/core';
import {ExamQuestionService} from '../shared/examination-proj/services/exam-question-services';

@Component({
  selector: 'exam-question',
  template: `
    <div class="flex justify-center mt-3">
      <div class=" bg-gray-200 min-h-[400px] w-[600px] p-4 rounded-2xl">
        <div class="flex justify-between">
          <button class=" rounded-3xl border-blue-100 p-1 shadow-2xl cursor-pointer text-blue-800">{{ topic() }}</button>
          <button class="text-gray-600 cursor-pointer"> Tag : {{ questionTag() }}</button>
        </div>

        <div class="">
          <h3 class=" text-xl font-normal mt-3 p-4 mb-4 border-b-gray-400 border-b-2">{{ currentQuestion().title }}</h3>


          <div class="grid grid-cols-2 gap-2">
            @for (opt of currentQuestion().options; track opt.id) {
              <div class="bg-white ring-2 ring-gray-200 p-4 rounded-2xl">{{alphabetMap[$index]}} - {{ opt.text }}</div>

            }

        </div>
          <div class="flex justify-between items-center mt-6 ">
            <button (click)="gotoPreviousQuestion()"
                    class="ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">Prev. Question</button>
            <button (click)="gotoNextQuestion()"
                    class="ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">Next Question</button>
          </div>
    </div>
    </div>
    </div>
  `


})
export class ExamQuestion {
  topic = signal("Home Economics");
  alphabetMap="ABCDEFG";
  questionIndex = signal(0);
  protected ExamQuestionService=inject(ExamQuestionService)
  questions = this.ExamQuestionService.questions;

  questionTag  = computed(() => {
    return `Question ${this.questionIndex() + 1 } of ${this.questions().length}`;
  });
  currentQuestion  = computed(() => {
    return this.questions()[this.questionIndex()];
  });


  gotoNextQuestion() {
    this.questionIndex.update(x => {
      if(x < this.questions().length - 1) return x + 1;
      else return x;
    });
  }
  gotoPreviousQuestion() {
    this.questionIndex.update(x => {
      if(x >= 1) return x - 1;
      else return x;
    });
  }
}

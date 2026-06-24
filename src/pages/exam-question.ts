import {Component, computed, signal,inject} from '@angular/core';
import {ExamQuestionService} from '../shared/examination-proj/services/exam-question-services';

@Component({
  selector: 'exam-question',
  template: `
    <div class="flex justify-center mt-3">
      <div
        class=" bg-green-100 min-h-[400px] 2xl:m-8 m-2 w-full xl:w-[600px] 2xl:w-[750px] p-4 rounded-2xl duration-300 hover:ring-4 hover:ring-green-400">
        <div class="flex justify-between">
          <span class=" rounded-3xl border-blue-100 p-1 shadow-2xl cursor-pointer text-gray-400">{{ topic() }}</span>
          <span class="text-gray-500 font-bold  cursor-pointer">{{ questionTag() }}</span>
        </div>

        <div class="">
          <h3 class=" text-xl font-normal mt-3 p-4 mb-4 border-b-green-400 border-b-2">{{ currentQuestion().title }}</h3>
          <div class="grid grid-cols-2 gap-4 ">

            @for (opt of currentQuestion().options; track opt.id) {
              <div
                (click)="markAsSelectedOption(opt)"
                [class]="(opt?.isSelected ?? false) ? selectedOptionClass() : ''"
                class="bg-white ring-2 cursor-pointer ring-gray-200 p-4 rounded-2xl">{{ alphabetMap[$index] }} - {{ opt.text }}
              </div>

            }

          </div>
          <div class="flex justify-between items-center mt-6  ">
             <button (click)="gotoPreviousQuestion()"
                     class="ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">Prev. Question</button>
            <button (click)="gotoNextQuestion()"
                    class="ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">
              Next Question
            </button>
          </div>

          <div class="text-center mt-8">
            <button (click)="submitAnswers()" [disabled]="!allowSubmit()"
                    class="ring-2 disabled:bg-gray-300 disabled:text-gray-400 rounded-lg cursor-pointer not-[disabled]:ring-green-600 duration-300 hover:ring-green-800 hover:bg-green-600 bg-green-800 text-white shadow px-6 py-2 text-xl">
              Submit Answers
            </button>
          </div>
        </div>
      </div>
    </div>
  `


})
export class ExamQuestion {
  selectedOptionClass = signal("!bg-green-600 duration-300 text-white font-bold shadow hover:scale-105");
  topic = signal("Home Economics");
  alphabetMap="ABCDEFG";
  questionIndex = signal(0);
  protected examQuestionService=inject(ExamQuestionService)
  questions = this.examQuestionService.getQuestions();
  allowSubmit = computed(() => {
    return this.questionIndex() + 1 === this.questions().length;
  });
  questionTag  = computed(() => {
    return `Question ${this.questionIndex() + 1 } of ${this.questions().length}`;
  });
  currentQuestion  = computed(() => {
    return this.questions()[this.questionIndex()];
  });

  userAnswers = signal([]);

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

  protected markAsSelectedOption(opt: any) {

    this.currentQuestion().options.forEach(o => {
      o.isSelected = false;
    });
    opt.isSelected = true;
    console.log("Selected Option Is:", opt);

  }

  protected submitAnswers() {
    console.log("Submitting Answers", this.questions());
  }
}

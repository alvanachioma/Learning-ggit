import {Component, computed, signal, inject, viewChild} from '@angular/core';
import {ExamQuestionService, ExamSubject} from '../shared/examination-proj/services/exam-question-services';
import {StopWatch} from '../shared/stopWatch/StopWatch';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'exam-question',
  imports: [
    StopWatch
  ],
  template: `

    <div class="flex flex-col justify-center items-center mt-2 lg:mt-3 2xl:mt-10 ">
      <div class="">
        <StopWatch [startStopWatch]="startExamClock()" [hour]="exam.duration().hour" [minute]="exam.duration().minute" [second]="exam.duration().second"
                   (onTimerStopped)="timerStopped.set(true)" #clock
                   (onTimerStarted)="handleExamStarted()"
                   (onTimerElapsed)="alertUserAndSubmit()" #stopWatch>
          😂😂😂 Exam Duration
        </StopWatch>
      </div>
      <div
        class="relative overflow-hidden bg-green-100 h-auto min-h-[500px] 2xl:m-8 m-2 w-full lg:w-[600px] xl:w-[650px] 2xl:w-[95%] p-4 rounded-2xl duration-300 hover:ring-4 hover:ring-green-400">
        <div class="flex justify-between">
          <span class="text-sm lg:text-xl xl:rounded-3xl border-blue-100  xl:shadow-2xl cursor-pointer text-gray-600">{{ exam.title() }}</span>
          <span class="text-gray-600 font-bold text-sm lg:text-xl  cursor-pointer">{{ questionTag() }}</span>
        </div>

        @if (!hasTimerElapsed()) {
          @if (hasExamStarted() && !timerStopped()) {
            <div animate.leave="animate__animated animate__bounceOutUp"
                 animate.enter="animate__animated animate__bounceInUp"
                 class="">
              <div class="flex flex-col justify-between gap-y-4">
                <div class="min-h-[380px]">
                  <h3 class="  2xl:text-3xl text-xl  font-normal mt-3 p-4 mb-4 border-b-green-400 border-b-2">{{ currentQuestion().title }}</h3>
                  @if(currentQuestion().isMultiOption){
                    <div
                      animate.leave="animate__animated animate__fadeOut"
                      animate.enter="animate__animated animate__fadeIn"
                      class="text-lg bg-amber-100 p-4 text-center text-red-500 font-bold">This is a Multi-Option Question. Choose all options that apply</div>
                  }

                  <div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 gap-y-3">

                    @for (opt of currentQuestion().options; track opt.id) {
                      <div
                        (click)="markAsSelectedOption(opt)"
                        [class]="(opt?.isSelected ?? false) ? selectedOptionClass() : ''"
                        class="hover:bg-green-100 hover:ring-4 duration-300 hover:ring-green-400 bg-white ring-2 2xl:text-[1.5rem] text-xl cursor-pointer ring-gray-200 xl:p-4 px-2 py-2 rounded-md xl:rounded-2xl">{{ alphabetMap[$index] }} - {{ opt.text }}
                      </div>

                    }

                  </div>
                </div>
                <div class="h-[150px] flex flex-col justify-end p-2 bg-green-200">
                  <div class="flex justify-between items-center mt-6  ">
                    <button (click)="gotoPreviousQuestion()"
                            [disabled]="!canGoPrev()"
                            class="disabled:bg-gray-300 disabled:ring-gray-300 disabled:text-gray-400  ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">
                      Prev. Question
                    </button>
                    <button (click)="gotoNextQuestion()"
                            [disabled]="!canGoNext()"
                            class="disabled:bg-gray-300 disabled:ring-gray-300 disabled:text-gray-400 ring-2 rounded-lg cursor-pointer ring-zinc-600 duration-300 hover:ring-zinc-800 hover:bg-zinc-600 bg-zinc-800 text-white shadow px-6 py-2">
                      Next Question
                    </button>
                  </div>
                  <div class="text-center 2xl:mt-8 mt-2 lg:mt-4">
                    <button (click)="confirmBeforeSubmit()"
                            class="ring-2 disabled:bg-gray-300 disabled:text-gray-400 rounded-lg cursor-pointer not-[disabled]:ring-green-600 duration-300 hover:ring-green-800 hover:bg-green-600 bg-green-800 text-white shadow px-6 py-2 text-xl">
                      Submit Exam
                    </button>

                  </div>
                </div>
              </div>
            </div>
          } @else if (timerStopped()) {
            <div animate.enter="animate__animated animate__fadeInUp"
                 animate.leave="animate__animated animate__fadeOutUp"
                 class="mt-20 bg-orange-200 ring-4 ring-orange-400 rounded-xl p-6">
              <h1 class="text-2xl text-gray-600 text-center">Timer Stopped By User action</h1>
              <div class="text-center mt-8">
                You are seeing this message because you may <br> have submitted the Exam before the timer runs Off
              </div>
            </div>
          }
          @else {
            <div class="mt-20"
                 animate.leave="animate__animated animate__bounceOutDown"
                 animate.enter="animate__animated animate__bounceInUp">
              <h1 class="text-2xl text-gray-600 text-center">Exams will Start Soon!</h1>
              <div class="text-center mt-8">
                <button (click)="startExam()"
                        class="ring-2 disabled:bg-gray-300 disabled:text-gray-400 rounded-lg cursor-pointer not-[disabled]:ring-green-600 duration-300 hover:ring-orange-800 hover:bg-orange-600 bg-orange-800 text-white shadow px-6 py-2 text-xl">
                  Start Exam
                </button>
              </div>
            </div>
          }

        } @else {
          <div animate.leave="animate__animated animate__backInDown"
               animate.enter="animate__animated animate__backInUp"
               class="  px-10 py-4 rounded-3xl ring-4 mt-4 ring-offset-red-400  flex-col flex justify-center items-center h-[400px] bg-red-200 text-red-600 text-xl">
            <h1 class="text-[2.5rem] animate-bounce delay-75">Time Up!😻</h1>
            <p class="font-bold text-lg">Your answers will be submitted</p>
          </div>
        }

      </div>
    </div>
  `


})
export class ExamQuestion {

  selectedOptionClass = signal("!bg-green-600 duration-300 text-white font-bold shadow hover:scale-105");
  protected alphabetMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  questionIndex = signal(0);
  protected examQuestionService = inject(ExamQuestionService)
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);
  protected exam! : ExamSubject;//getExam("economics-001");
  questionTag = computed(() => {
    return `Question ${this.questionIndex() + 1} of ${this.exam.questions().length}`;
  });
  currentQuestion = computed(() => {
    return this.exam.questions()[this.questionIndex()];
  });
  protected timerStopped = signal(false);
  protected clock = viewChild<StopWatch>("clock");


  constructor() {
    this.activeRoute.queryParams.subscribe(x => {
      const selectedExamId = x["id"];

      if(selectedExamId){
        const ex = this.examQuestionService.getExam(selectedExamId);
        if(ex){
          this.exam = ex;
        }
        else {
          this.router.navigate(["/home"]);
        }
      }
      else {
        this.router.navigate(["/home"]);
      }

    })
  }
  protected canGoNext = computed(() => {
    console.log("QUESTION INDEX",this.questionIndex());
    return this.questionIndex() < this.exam.questions().length-1;
  });
  protected canGoPrev = computed(() => {
    return this.questionIndex() > 0;
  });
  gotoNextQuestion() {
    this.questionIndex.update(x => {
      if (x < this.exam.questions().length - 1) return x + 1;
      else return x;
    });
  }

  gotoPreviousQuestion() {
    this.questionIndex.update(x => {
      if (x >= 1) return x - 1;
      else return x;
    });
  }

  protected markAsSelectedOption(opt: any) {

    // check for multi-option question and allow users to select multiple options
    if(this.currentQuestion().isMultiOption){
      opt.isSelected = !opt.isSelected;
    }
    else{
      this.currentQuestion().options.forEach(o => {
        o.isSelected = false;
      });
      opt.isSelected = true;
    }

  }

  protected confirmBeforeSubmit(){
    if(confirm(`Are you sure you want to Submit your Answers for ${this.exam.title()} ?`)){
      this.submitAnswers();
    }
  }
  protected submitAnswers() {
    const answer = this.exam.questions().map(o => {
      return {
        questionId: o.id,
        question: o.title,
        answers: o.options.filter(op => op.isSelected === true)
      };
    }).filter(x => x.answers.length > 0);
    this.examQuestionService.submitUserAnswer(this.exam.id(),answer)
    //"ANSWER => ",answer);
    this.stopClock();
  }

  protected stopClock(){
    this.clock()?.stopTimer();
  }

  hasTimerElapsed = signal(false);

  protected alertUserAndSubmit() {
    this.hasTimerElapsed = signal(true);
    this.submitAnswers();
  }

  hasExamStarted = signal(false);
  startExamClock = signal(false);

  protected startExam() {
    this.startExamClock.set(true);
  }

  protected handleExamStarted() {
    this.hasExamStarted.set(true);
  }



}

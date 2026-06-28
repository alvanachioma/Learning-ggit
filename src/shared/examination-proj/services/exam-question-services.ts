import {Injectable, Signal, signal} from '@angular/core';
import {examDb, resetExamQuestions} from './examDb';

export type ExamSubject = {
  id:Signal<string>;
  randomizeQuestions ?: boolean,
  randomizeQuestionOptions ?: boolean,
  useGhostMarks ?: Signal<boolean>, // Each question option has marks assign to then and when a user fails an option the mark is deducted from the ttotal score the user scored
  ghostMarkPoint?: Signal<number>,
  title : Signal<string>,
  instructions ?: Signal<string>,
  duration : Signal<{
    hour: number,
    minute: number,
    second: number
  }>,
  questions : Signal<QuizQuestion[]>
}
export interface QuestionOption {
  id : number, text  : string , isSelected?: boolean
}

export interface QuizQuestion{
  id : number,
  title : string;
  isMultiOption ?: boolean;
  options : QuestionOption[];
}


// Answer key for the questions above.
// correctOptionIds holds the id(s) of the correct option(s) for each question.
// Single-answer questions have one id; multi-option questions have several.
export interface AnswerKey {
  questionId: number;
  correctOptionIds: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ExamQuestionService {
  /*getAngularExam(){
    return angularExam;
  }*/
  getExam(examId : string){
    const exam = examDb.find(exam => exam.id().toLowerCase() === examId.toLowerCase());
    if(exam){
      return resetExamQuestions(exam);
    }
    return undefined;
  }

  getExamList(){
    return examDb.map(exam => {
      return {
        id:exam.id,
        title : exam.title,
        duration : exam.duration()
      }
    });
  }

  submitUserAnswer(examId :string , answer: { questionId: number; question: string; answers: QuestionOption[] }[]) {

  }
}

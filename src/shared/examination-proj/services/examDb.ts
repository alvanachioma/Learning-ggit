import {ExamSubject, QuizQuestion} from './exam-question-services';
import {cSharpAdvanceExam} from './csharp-advanced-engineer';
import {csharpBeginnersExam} from './csharp-beginner-intermediate';
import {softwareArchExam} from './software-architect-exam';
import {angularExam} from './angular-exam';
import {advanceAngularExam} from './advanced-angular-developer';
import {bibleExam} from './bible-study-beginner';
import {economicsExam} from './economicsExam';

export const examDb:ExamSubject[] = [
  cSharpAdvanceExam,
  csharpBeginnersExam,
  softwareArchExam,
  angularExam,
  advanceAngularExam,
  bibleExam,
  economicsExam,
]

export function randomizeArrayIndexes<T>(arr: T[]) {
  let currentIndex = arr.length;
  let randomIndex = 0 ;// Math.floor(Math.random() * currentIndex);
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

export function randomizeQuestionsIfRequested( questions: QuizQuestion[] ) {
      return randomizeArrayIndexes(questions);

}

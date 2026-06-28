import {AnswerKey, ExamSubject, QuizQuestion} from './exam-question-services';
import {csharpAdvancedAnswers, cSharpAdvanceExam} from './csharp-advanced-engineer';
import {csharpBeginnerAnswers, csharpBeginnersExam} from './csharp-beginner-intermediate';
import {architectAnswers, softwareArchExam} from './software-architect-exam';
import {angularExam, ngAnswers} from './angular-exam';
import {advanceAngularExam, advancedAngularAnswers} from './advanced-angular-developer';
import {bibleAnswers, bibleExam} from './bible-study-beginner';
import {economicsExam} from './economicsExam';
import {htmlAnswers, htmlExam} from './html-exam';
import {cssAnswers, cssExam} from './css-exam';
import {jsAnswers, jsExam} from './javascript-exam';
import {signal} from '@angular/core';

export const examDb: ExamSubject[] = [
  economicsExam,
  htmlExam,
  cssExam,
  jsExam,
  cSharpAdvanceExam,
  csharpBeginnersExam,
  softwareArchExam,
  angularExam,
  advanceAngularExam,
  bibleExam
]

export const examAnswersDbMapper: {
  examId: string, answers: AnswerKey[], hasAnswers?: boolean;
} [] = [
  {
    examId: angularExam.id(), answers: ngAnswers, hasAnswers: true
  },
  {
    examId: advanceAngularExam.id(), answers: advancedAngularAnswers, hasAnswers: true
  },
  {
    examId: economicsExam.id(), answers: [], hasAnswers: false
  },
  {
    examId: bibleExam.id(), answers: bibleAnswers, hasAnswers: true
  },
  {
    examId: softwareArchExam.id(), answers: architectAnswers, hasAnswers: true
  },
  {
    examId: csharpBeginnersExam.id(), answers: csharpBeginnerAnswers, hasAnswers: true
  },
  {
    examId: cSharpAdvanceExam.id(), answers: csharpAdvancedAnswers, hasAnswers: true
  },
  {
    examId: htmlExam.id(), answers: htmlAnswers, hasAnswers: true
  },
  {
    examId: cssExam.id(), answers: cssAnswers, hasAnswers: true
  },
  {
    examId: jsExam.id(), answers: jsAnswers, hasAnswers: true
  },
];

export function randomizeArrayIndexes<T>(arr: T[]) {
  let currentIndex = arr.length;
  let randomIndex = 0;// Math.floor(Math.random() * currentIndex);
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

export function randomizeQuestionsIfRequested<T>(questions: T[]) {
  return randomizeArrayIndexes(questions);

}

function resetQuestions(questions: QuizQuestion[]) {
  //questions.update(x => randomizeQuestionsIfRequested([...x]))
  questions.forEach(y => {
    y.options.forEach(z => z.isSelected = false);
  });
  return questions;
}

export function resetExamQuestions(exam: ExamSubject): ExamSubject {
  return {
    ...exam,
    questions: signal(resetQuestions(exam.questions()))
  }
}

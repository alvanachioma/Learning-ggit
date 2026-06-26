import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

type ExamSubject = {
  id:Signal<string>;
  title : Signal<string>,
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

const ngQuestions: QuizQuestion[] = [
  {
    id :1,
    title : "",
    options : []
  }
];
const angularExam : ExamSubject = {
  id : signal("ng-101"),
  title : signal("Angular Exam (Beginner Level)"),
  duration : signal({hour : 0, minute:50,second:0}),
  questions : signal<QuizQuestion[]>(ngQuestions),
}

@Injectable({
  providedIn: 'root'
})
export class ExamQuestionService {

  private questions=signal<QuizQuestion[]>([
    {
      id:1,
      title: "What is the safest way to store sharp knives in the kitchen",
      options:[
        {id:1, text: "In soapy water"},
        {id:2, text: "In knife block"},
        {id:3, text: "In Pointed Upward"},
        {id:4, text:"Under the pillow"}
      ],

    },
    {
      id:16,
      title: "Why do we need Food?",
      isMultiOption : true,
      options:[
        {id:1, text: "For Our Growth"},
        {id:2, text: "We can surve without food"},
        {id:3, text: "For energy production in the body"},
        {id:4, text:"None of the above"}
      ],

    },
    {
      id: 2,
      title: "Which nutrient is mainly responsible for energy?",
      options: [
        { id: 1, text: "Carbohydrates" },
        { id: 2, text: "Vitamins" },
        { id: 3, text: "Water" },
        { id: 4, text: "Minerals" }
      ]
    },
    {
      id: 3,
      title: "Best method of washing vegetables?",
      options: [
        { id: 1, text: "Detergent" },
        { id: 2, text: "Hot oil" },
        { id: 3, text: "Clean running water" },
        { id: 4, text: "No washing needed" }
      ]
    },
    {
      id: 4,
      title: "What is used to preserve food?",
      options: [
        { id: 1, text: "Sunlight" },
        { id: 2, text: "Refrigeration" },
        { id: 3, text: "Heat only" },
        { id: 4, text: "Air exposure" }
      ]
    },
    {
      id: 5,
      title: "Which is a protein source?",
      options: [
        { id: 1, text: "Rice" },
        { id: 2, text: "Sugar" },
        { id: 3, text: "Oil" },
        { id: 4, text: "Beans" }
      ]
    },
    {
      id: 6,
      title: "Best way to clean utensils?",
      options: [
        { id: 1, text: "Soap and water" },
        { id: 2, text: "Mud" },
        { id: 3, text: "Sand only" },
        { id: 4, text: "Dry cloth only" }
      ]
    },
    {
      id: 7,
      title: "What is hygiene?",
      options: [
        { id: 1, text: "Eating fast food" },
        { id: 2, text: "Keeping clean" },
        { id: 3, text: "Sleeping early" },
        { id: 4, text: "Watching TV" }
      ]
    },
    {
      id: 8,
      title: "Which helps prevent illness?",
      options: [
        { id: 1, text: "Dirty hands" },
        { id: 2, text: "Skipping meals" },
        { id: 3, text: "Hand washing" },
        { id: 4, text: "Loud music" }
      ]
    },
    {
      id: 9,
      title: "Which is a balanced diet component?",
      options: [
        { id: 1, text: "Only protein" },
        { id: 2, text: "Only fat" },
        { id: 3, text: "Carbohydrates, proteins, fats" },
        { id: 4, text: "Only vitamins" }
      ]
    },
    {
      id: 10,
      title: "What is the main purpose of cooking food?",
      options: [
        { id: 1, text: "To change color" },
        { id: 2, text: "To make food safe and digestible" },
        { id: 3, text: "To waste time" },
        { id: 4, text: "To cool food" }
      ]
    },
    {
      id: 11,
      title: "Which vitamin is obtained from sunlight?",
      options: [
        { id: 1, text: "Vitamin D" },
        { id: 2, text: "Vitamin C" },
        { id: 3, text: "Vitamin B" },
        { id: 4, text: "Vitamin A" }
      ]
    },
    {
      id: 12,
      title: "Which of these is a cleaning agent?",
      options: [
        { id: 1, text: "Sugar" },
        { id: 2, text: "Salt" },
        { id: 3, text: "Oil" },
        { id: 4, text: "Soap" }
      ]
    },
    {
      id: 13,
      title: "What is food contamination?",
      options: [
        { id: 1, text: "Food being tasty" },
        { id: 2, text: "Presence of harmful substances in food" },
        { id: 3, text: "Food being hot" },
        { id: 4, text: "Food being sweet" }
      ]
    },
    {
      id: 14,
      title: "Which utensil is used for frying?",
      options: [
        { id: 1, text: "Cup" },
        { id: 2, text: "Plate" },
        { id: 3, text: "Frying pan" },
        { id: 4, text: "Spoon" }
      ]
    },
    {
      id: 15,
      title: "What is personal hygiene?",
      options: [
        { id: 1, text: "Care of the body and cleanliness" },
        { id: 2, text: "Watching TV" },
        { id: 3, text: "Playing games" },
        { id: 4, text: "Sleeping late" }
      ]
    }
  ]);
  getQuestions(){
    return this.questions;
  }
  getExam(examId : string){
    const exam : ExamSubject = {
      duration : signal({hour : 1, minute : 30, second : 0}),
      title : signal("Home Economics (Study I)"),
      id: signal(examId),
      questions : this.questions
    };
    return exam;
  }

  submitUserAnswer(examId :string , answer: { questionId: number; question: string; answers: QuestionOption[] }[]) {

  }
}

import {signal} from "@angular/core";
import {AnswerKey, ExamSubject, QuizQuestion} from "./exam-question-services";
import {randomizeQuestionsIfRequested} from './examDb';
let ngQuestions: QuizQuestion[] = [
  // ---------- Single-option questions (22) ----------
  {
    id: 1,
    title: "What is Angular?",
    options: [
      { id: 1, text: "A back-end database engine" },
      { id: 2, text: "A TypeScript-based front-end web framework" }, // correct
      { id: 3, text: "A CSS pre-processor" },
      { id: 4, text: "An operating system" }
    ]
  },
  {
    id: 2,
    title: "Which language is primarily used to write Angular applications?",
    options: [
      { id: 1, text: "Python" },
      { id: 2, text: "Java" },
      { id: 3, text: "TypeScript" }, // correct
      { id: 4, text: "Ruby" }
    ]
  },
  {
    id: 3,
    title: "Which CLI command creates a new Angular application?",
    options: [
      { id: 1, text: "ng generate app" },
      { id: 2, text: "ng new" }, // correct
      { id: 3, text: "ng create" },
      { id: 4, text: "ng init" }
    ]
  },
  {
    id: 4,
    title: "Which CLI command starts the local development server?",
    options: [
      { id: 1, text: "ng build" },
      { id: 2, text: "ng test" },
      { id: 3, text: "ng serve" }, // correct
      { id: 4, text: "ng run" }
    ]
  },
  {
    id: 5,
    title: "Which decorator is used to define an Angular component?",
    options: [
      { id: 1, text: "@Injectable" },
      { id: 2, text: "@Component" }, // correct
      { id: 3, text: "@NgModule" },
      { id: 4, text: "@Directive" }
    ]
  },
  {
    id: 6,
    title: "In a @Component, what does the 'selector' property define?",
    options: [
      { id: 1, text: "The component's CSS styles" },
      { id: 2, text: "The custom HTML tag used to place the component" }, // correct
      { id: 3, text: "The component's data model" },
      { id: 4, text: "The routing path" }
    ]
  },
  {
    id: 7,
    title: "Which property points to an external HTML file for a component?",
    options: [
      { id: 1, text: "templateUrl" }, // correct
      { id: 2, text: "styleUrl" },
      { id: 3, text: "htmlFile" },
      { id: 4, text: "viewPath" }
    ]
  },
  {
    id: 8,
    title: "Which binding syntax displays a component property in the template?",
    options: [
      { id: 1, text: "[value]" },
      { id: 2, text: "(value)" },
      { id: 3, text: "{{ value }}" }, // correct
      { id: 4, text: "#value" }
    ]
  },
  {
    id: 9,
    title: "Which syntax is used for property binding?",
    options: [
      { id: 1, text: "(property)=\"value\"" },
      { id: 2, text: "[property]=\"value\"" }, // correct
      { id: 3, text: "{{ property }}" },
      { id: 4, text: "#property" }
    ]
  },
  {
    id: 10,
    title: "Which syntax is used for event binding?",
    options: [
      { id: 1, text: "[event]=\"handler()\"" },
      { id: 2, text: "{{ event }}" },
      { id: 3, text: "(event)=\"handler()\"" }, // correct
      { id: 4, text: "#event" }
    ]
  },
  {
    id: 11,
    title: "Which syntax provides two-way data binding?",
    options: [
      { id: 1, text: "[(ngModel)]" }, // correct
      { id: 2, text: "[ngModel]" },
      { id: 3, text: "(ngModel)" },
      { id: 4, text: "{{ ngModel }}" }
    ]
  },
  {
    id: 12,
    title: "In an @for block, which part is required for identity tracking?",
    options: [
      { id: 1, text: "track" }, // correct
      { id: 2, text: "key" },
      { id: 3, text: "index" },
      { id: 4, text: "id" }
    ]
  },
  {
    id: 13,
    title: "Which block handles the 'no items' case alongside @for?",
    options: [
      { id: 1, text: "@default" },
      { id: 2, text: "@empty" }, // correct
      { id: 3, text: "@none" },
      { id: 4, text: "@else" }
    ]
  },
  {
    id: 14,
    title: "How do you read the current value of a signal named 'count'?",
    options: [
      { id: 1, text: "count" },
      { id: 2, text: "count.value" },
      { id: 3, text: "count()" }, // correct
      { id: 4, text: "count.get" }
    ]
  },
  {
    id: 15,
    title: "Which function creates a derived, read-only signal from other signals?",
    options: [
      { id: 1, text: "effect()" },
      { id: 2, text: "signal()" },
      { id: 3, text: "computed()" }, // correct
      { id: 4, text: "inject()" }
    ]
  },
  {
    id: 16,
    title: "Which decorator marks a class as injectable as a service?",
    options: [
      { id: 1, text: "@Component" },
      { id: 2, text: "@Injectable" }, // correct
      { id: 3, text: "@Directive" },
      { id: 4, text: "@Pipe" }
    ]
  },
  {
    id: 17,
    title: "Which function is the modern way to obtain a dependency inside a class?",
    options: [
      { id: 1, text: "provide()" },
      { id: 2, text: "resolve()" },
      { id: 3, text: "inject()" }, // correct
      { id: 4, text: "require()" }
    ]
  },
  {
    id: 18,
    title: "Which element marks where routed components are displayed?",
    options: [
      { id: 1, text: "<router-view>" },
      { id: 2, text: "<ng-outlet>" },
      { id: 3, text: "<router-outlet>" }, // correct
      { id: 4, text: "<route-slot>" }
    ]
  },
  {
    id: 19,
    title: "Which Angular feature is used to make HTTP requests?",
    options: [
      { id: 1, text: "HttpClient" }, // correct
      { id: 2, text: "FetchModule" },
      { id: 3, text: "AjaxService" },
      { id: 4, text: "WebRequest" }
    ]
  },
  {
    id: 20,
    title: "What symbol separates a value from a pipe in a template?",
    options: [
      { id: 1, text: "The pipe character |" }, // correct
      { id: 2, text: "A comma ," },
      { id: 3, text: "A colon :" },
      { id: 4, text: "A semicolon ;" }
    ]
  },
  {
    id: 21,
    title: "Which file is the main entry point that bootstraps an Angular app?",
    options: [
      { id: 1, text: "main.ts" }, // correct
      { id: 2, text: "styles.css" },
      { id: 3, text: "package.json" },
      { id: 4, text: "tsconfig.json" }
    ]
  },
  {
    id: 22,
    title: "Which template reference syntax creates a variable for a DOM element?",
    options: [
      { id: 1, text: "[ref]" },
      { id: 2, text: "(ref)" },
      { id: 3, text: "#ref" }, // correct
      { id: 4, text: "{{ ref }}" }
    ]
  },

  // ---------- Multi-option questions (28) ----------
  {
    id: 23,
    title: "Which of the following are core building blocks in Angular?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Components" }, // correct
      { id: 2, text: "SQL tables" },
      { id: 3, text: "CSS stylesheets" },
      { id: 4, text: "Stored procedures" }
    ]
  },
  {
    id: 24,
    title: "Which of these are valid types of data binding in Angular?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Interpolation" }, // correct
      { id: 2, text: "Property binding" }, // correct
      { id: 3, text: "Event binding" }, // correct
      { id: 4, text: "Diagonal binding" }
    ]
  },
  {
    id: 25,
    title: "Which are valid built-in control flow blocks in modern Angular?",
    isMultiOption: true,
    options: [
      { id: 1, text: "@if" }, // correct
      { id: 2, text: "@for" }, // correct
      { id: 3, text: "@switch" }, // correct
      { id: 4, text: "@unless" }
    ]
  },
  {
    id: 26,
    title: "Which of the following are valid Angular CLI commands?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ng new" }, // correct
      { id: 2, text: "ng serve" }, // correct
      { id: 3, text: "ng build" }, // correct
      { id: 4, text: "ng compile" }
    ]
  },
  {
    id: 27,
    title: "Which of these are Angular component lifecycle hooks?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ngOnInit" }, // correct
      { id: 2, text: "ngOnDestroy" }, // correct
      { id: 3, text: "ngOnChanges" }, // correct
      { id: 4, text: "ngOnReady" }
    ]
  },
  {
    id: 28,
    title: "Which functions are part of the Angular signals API?",
    isMultiOption: true,
    options: [
      { id: 1, text: "signal()" }, // correct
      { id: 2, text: "computed()" }, // correct
      { id: 3, text: "effect()" }, // correct
      { id: 4, text: "observable()" }
    ]
  },
  {
    id: 29,
    title: "Which of these are legacy (NgModule-era) structural directives?",
    isMultiOption: true,
    options: [
      { id: 1, text: "*ngIf" }, // correct
      { id: 2, text: "*ngFor" }, // correct
      { id: 3, text: "*ngSwitch" }, // correct
      { id: 4, text: "*ngBind" }
    ]
  },
  {
    id: 30,
    title: "Which are valid ways to communicate between parent and child components?",
    isMultiOption: true,
    options: [
      { id: 1, text: "input() for parent-to-child" }, // correct
      { id: 2, text: "output() for child-to-parent" }, // correct
      { id: 3, text: "A shared service" }, // correct
      { id: 4, text: "Editing the DOM with jQuery" }
    ]
  },
  {
    id: 31,
    title: "Which of the following are real Angular decorators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "@Component" }, // correct
      { id: 2, text: "@Injectable" }, // correct
      { id: 3, text: "@Pipe" }, // correct
      { id: 4, text: "@Module" }
    ]
  },
  {
    id: 32,
    title: "Which of these are built-in Angular pipes?",
    isMultiOption: true,
    options: [
      { id: 1, text: "date" }, // correct
      { id: 2, text: "currency" }, // correct
      { id: 3, text: "uppercase" }, // correct
      { id: 4, text: "translate" }
    ]
  },
  {
    id: 33,
    title: "Which statements about standalone components are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They are the default in modern Angular" }, // correct
      { id: 2, text: "They declare their own dependencies via 'imports'" }, // correct
      { id: 3, text: "They can be used without an NgModule" }, // correct
      { id: 4, text: "They must always be declared inside an NgModule" }
    ]
  },
  {
    id: 34,
    title: "Which statements about Angular services are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They share data and logic across components" }, // correct
      { id: 2, text: "They are typically marked with @Injectable" }, // correct
      { id: 3, text: "They can be provided in 'root' as singletons" }, // correct
      { id: 4, text: "They render HTML templates" }
    ]
  },
  {
    id: 35,
    title: "Which of these are valid methods on a WritableSignal?",
    isMultiOption: true,
    options: [
      { id: 1, text: "set()" }, // correct
      { id: 2, text: "update()" }, // correct
      { id: 3, text: "asReadonly()" }, // correct
      { id: 4, text: "next()" }
    ]
  },
  {
    id: 36,
    title: "Which statements about Dependency Injection are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Dependencies are supplied to a class rather than created by it" }, // correct
      { id: 2, text: "It improves testability and reuse" }, // correct
      { id: 3, text: "inject() can be used to get a dependency" }, // correct
      { id: 4, text: "It is only used for CSS styling" }
    ]
  },
  {
    id: 37,
    title: "Which of these are related to Angular routing?",
    isMultiOption: true,
    options: [
      { id: 1, text: "routerLink" }, // correct
      { id: 2, text: "<router-outlet>" }, // correct
      { id: 3, text: "Routes configuration" }, // correct
      { id: 4, text: "ngModel" }
    ]
  },
  {
    id: 38,
    title: "Which files are commonly part of a single Angular component?",
    isMultiOption: true,
    options: [
      { id: 1, text: "A .ts file (class)" }, // correct
      { id: 2, text: "An .html template file" }, // correct
      { id: 3, text: "A .css/.scss styles file" }, // correct
      { id: 4, text: "A .exe binary file" }
    ]
  },
  {
    id: 39,
    title: "Which TypeScript features are commonly used in Angular?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Classes" }, // correct
      { id: 2, text: "Interfaces" }, // correct
      { id: 3, text: "Decorators" }, // correct
      { id: 4, text: "Pointers" }
    ]
  },
  {
    id: 40,
    title: "Which are valid ways to apply styling/classes in templates?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ngClass directive" }, // correct
      { id: 2, text: "ngStyle directive" }, // correct
      { id: 3, text: "[paint] binding" },
      { id: 4, text: "(style) event binding" }
    ]
  },
  {
    id: 41,
    title: "Which HTTP methods are available via HttpClient?",
    isMultiOption: true,
    options: [
      { id: 1, text: "get()" }, // correct
      { id: 2, text: "post()" }, // correct
      { id: 3, text: "put()" }, // correct
      { id: 4, text: "fetchAll()" }
    ]
  },
  {
    id: 42,
    title: "Which are valid Angular template binding symbols?",
    isMultiOption: true,
    options: [
      { id: 1, text: "{{ }} for interpolation" }, // correct
      { id: 2, text: "[ ] for property binding" }, // correct
      { id: 3, text: "( ) for event binding" }, // correct
      { id: 4, text: "<< >> for state binding" }
    ]
  },
  {
    id: 43,
    title: "Which statements about the @for block are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It requires a track expression" }, // correct
      { id: 2, text: "It can include an @empty block" }, // correct
      { id: 3, text: "It exposes contextual variables like $index" }, // correct
      { id: 4, text: "It replaces the need for components" }
    ]
  },
  {
    id: 44,
    title: "Which of these are valid event bindings?",
    isMultiOption: true,
    options: [
      { id: 1, text: "(click)" }, // correct
      { id: 2, text: "(input)" }, // correct
      { id: 3, text: "(submit)" }, // correct
      { id: 4, text: "(render)" }
    ]
  },
  {
    id: 45,
    title: "Which are good reasons to use signals?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Fine-grained reactivity" }, // correct
      { id: 2, text: "Automatic dependency tracking in computed values" }, // correct
      { id: 3, text: "Simple, synchronous state reads" }, // correct
      { id: 4, text: "They replace TypeScript entirely" }
    ]
  },
  {
    id: 46,
    title: "Which approaches does Angular support for handling forms?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Template-driven forms" }, // correct
      { id: 2, text: "Reactive forms" }, // correct
      { id: 3, text: "Database-bound forms" },
      { id: 4, text: "SQL forms" }
    ]
  },
  {
    id: 47,
    title: "Which statements about interpolation are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It uses double curly braces {{ }}" }, // correct
      { id: 2, text: "It renders component data into the template" }, // correct
      { id: 3, text: "It can evaluate simple expressions" }, // correct
      { id: 4, text: "It is used to listen for DOM events" }
    ]
  },
  {
    id: 48,
    title: "Which statements about the Angular CLI are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It can scaffold projects and components" }, // correct
      { id: 2, text: "It can run a development server" }, // correct
      { id: 3, text: "It can build the app for production" }, // correct
      { id: 4, text: "It is a database management tool" }
    ]
  },
  {
    id: 49,
    title: "Which are valid ways to conditionally show content in a template?",
    isMultiOption: true,
    options: [
      { id: 1, text: "@if block" }, // correct
      { id: 2, text: "@switch block" }, // correct
      { id: 3, text: "*ngIf directive (legacy)" }, // correct
      { id: 4, text: "@hide block" }
    ]
  },
  {
    id: 50,
    title: "Which lifecycle hooks run after initialization or before destruction?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ngOnInit (after init)" }, // correct
      { id: 2, text: "ngAfterViewInit (after view init)" }, // correct
      { id: 3, text: "ngOnDestroy (before destruction)" }, // correct
      { id: 4, text: "ngBeforeRender" }
    ]
  }
];
/*
ngQuestions =  randomizeQuestionsIfRequested(ngQuestions);
ngQuestions.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options)
});*/

export const ngAnswers: AnswerKey[] = [
  // Single-option questions
  { questionId: 1, correctOptionIds: [2] },
  { questionId: 2, correctOptionIds: [3] },
  { questionId: 3, correctOptionIds: [2] },
  { questionId: 4, correctOptionIds: [3] },
  { questionId: 5, correctOptionIds: [2] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [1] },
  { questionId: 8, correctOptionIds: [3] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [3] },
  { questionId: 11, correctOptionIds: [1] },
  { questionId: 12, correctOptionIds: [1] },
  { questionId: 13, correctOptionIds: [2] },
  { questionId: 14, correctOptionIds: [3] },
  { questionId: 15, correctOptionIds: [3] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [3] },
  { questionId: 18, correctOptionIds: [3] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [1] },
  { questionId: 21, correctOptionIds: [1] },
  { questionId: 22, correctOptionIds: [3] },
  { questionId: 23, correctOptionIds: [1] },
  { questionId: 24, correctOptionIds: [1, 2, 3] },
  { questionId: 25, correctOptionIds: [1, 2, 3] },
  { questionId: 26, correctOptionIds: [1, 2, 3] },
  { questionId: 27, correctOptionIds: [1, 2, 3] },
  { questionId: 28, correctOptionIds: [1, 2, 3] },
  { questionId: 29, correctOptionIds: [1, 2, 3] },
  { questionId: 30, correctOptionIds: [1, 2, 3] },
  { questionId: 31, correctOptionIds: [1, 2, 3] },
  { questionId: 32, correctOptionIds: [1, 2, 3] },
  { questionId: 33, correctOptionIds: [1, 2, 3] },
  { questionId: 34, correctOptionIds: [1, 2, 3] },
  { questionId: 35, correctOptionIds: [1, 2, 3] },
  { questionId: 36, correctOptionIds: [1, 2, 3] },
  { questionId: 37, correctOptionIds: [1, 2, 3] },
  { questionId: 38, correctOptionIds: [1, 2, 3] },
  { questionId: 39, correctOptionIds: [1, 2, 3] },
  { questionId: 40, correctOptionIds: [1, 2] },
  { questionId: 41, correctOptionIds: [1, 2, 3] },
  { questionId: 42, correctOptionIds: [1, 2, 3] },
  { questionId: 43, correctOptionIds: [1, 2, 3] },
  { questionId: 44, correctOptionIds: [1, 2, 3] },
  { questionId: 45, correctOptionIds: [1, 2, 3] },
  { questionId: 46, correctOptionIds: [1, 2] },
  { questionId: 47, correctOptionIds: [1, 2, 3] },
  { questionId: 48, correctOptionIds: [1, 2, 3] },
  { questionId: 49, correctOptionIds: [1, 2, 3] },
  { questionId: 50, correctOptionIds: [1, 2, 3] }
];

const ngQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...ngQuestions]));
ngQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

/*ngQuestions.forEach(x => {
  x.options = randomizeQuestionsIfRequested(x.options);
});*/

export const angularExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  ghostMarkPoint : signal(5),
  useGhostMarks : signal(true),
  id: signal("ng-100"),
  title: signal("Angular Exam (Beginner Level)"),
  duration: signal({ hour: 0, minute: 40, second: 30 }),
  questions: ngQuestionsSignal/*signal(ngQuestions)*/,
};

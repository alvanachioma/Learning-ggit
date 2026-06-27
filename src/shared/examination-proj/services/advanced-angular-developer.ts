import {QuizQuestion, AnswerKey, ExamSubject} from './exam-question-services';
import {signal} from '@angular/core';

// ============================================================================
// Advanced Angular Developer
// 70 questions (30 single-answer, 40 multi-option). isMultiOption: true marks
// multi-select questions. Correct option(s) are tagged with "// correct".
// Covers signals, change detection (incl. zoneless), RxJS interop, advanced DI,
// routing, reactive forms, @defer, content projection, SSR/hydration and more.
// See advancedAngularAnswers for the answer key.
// ============================================================================
export const advancedAngularQuestions: QuizQuestion[] = [
  // ---------- Single-answer (1-30) ----------
  {
    id: 1,
    title: "What does effect() do?",
    options: [
      { id: 1, text: "Runs a side effect whenever its tracked signals change" }, // correct
      { id: 2, text: "Creates a writable signal" },
      { id: 3, text: "Converts a signal to an Observable" },
      { id: 4, text: "Memoizes a pure value" }
    ]
  },
  {
    id: 2,
    title: "What does untracked() do?",
    options: [
      { id: 1, text: "Stops global change detection" },
      { id: 2, text: "Reads a signal without creating a dependency" }, // correct
      { id: 3, text: "Creates a new effect" },
      { id: 4, text: "Unsubscribes from an Observable" }
    ]
  },
  {
    id: 3,
    title: "Which function converts an Observable into a signal?",
    options: [
      { id: 1, text: "toSignal()" }, // correct
      { id: 2, text: "toObservable()" },
      { id: 3, text: "asSignal()" },
      { id: 4, text: "fromObservable()" }
    ]
  },
  {
    id: 4,
    title: "Which function converts a signal into an Observable?",
    options: [
      { id: 1, text: "toSignal()" },
      { id: 2, text: "toObservable()" }, // correct
      { id: 3, text: "signalToObs()" },
      { id: 4, text: "asObservable()" }
    ]
  },
  {
    id: 5,
    title: "What is the default change detection strategy for a component?",
    options: [
      { id: 1, text: "OnPush" },
      { id: 2, text: "Manual" },
      { id: 3, text: "Default" }, // correct
      { id: 4, text: "Detached" }
    ]
  },
  {
    id: 6,
    title: "How does OnPush change detection behave?",
    options: [
      { id: 1, text: "It checks on every global browser event" },
      { id: 2, text: "It checks only on input reference change, component events, async pipe, or signal updates" }, // correct
      { id: 3, text: "It disables change detection entirely" },
      { id: 4, text: "It runs change detection twice per cycle" }
    ]
  },
  {
    id: 7,
    title: "Which library has traditionally powered Angular's automatic change detection?",
    options: [
      { id: 1, text: "Zone.js" }, // correct
      { id: 2, text: "RxJS" },
      { id: 3, text: "Redux" },
      { id: 4, text: "Webpack" }
    ]
  },
  {
    id: 8,
    title: "What does a zoneless Angular application remove?",
    options: [
      { id: 1, text: "The need for RxJS" },
      { id: 2, text: "The dependency on Zone.js for change detection" }, // correct
      { id: 3, text: "All components" },
      { id: 4, text: "The router" }
    ]
  },
  {
    id: 9,
    title: "Which RxJS subject stores and emits its current value to new subscribers?",
    options: [
      { id: 1, text: "Subject" },
      { id: 2, text: "BehaviorSubject" }, // correct
      { id: 3, text: "AsyncSubject" },
      { id: 4, text: "ReplaySubject" }
    ]
  },
  {
    id: 10,
    title: "Which operator cancels the previous inner observable when a new value arrives?",
    options: [
      { id: 1, text: "concatMap" },
      { id: 2, text: "mergeMap" },
      { id: 3, text: "switchMap" }, // correct
      { id: 4, text: "exhaustMap" }
    ]
  },
  {
    id: 11,
    title: "Which operator queues inner observables and runs them sequentially?",
    options: [
      { id: 1, text: "concatMap" }, // correct
      { id: 2, text: "switchMap" },
      { id: 3, text: "mergeMap" },
      { id: 4, text: "exhaustMap" }
    ]
  },
  {
    id: 12,
    title: "Which operator ignores new values while an inner observable is still active?",
    options: [
      { id: 1, text: "mergeMap" },
      { id: 2, text: "concatMap" },
      { id: 3, text: "switchMap" },
      { id: 4, text: "exhaustMap" } // correct
    ]
  },
  {
    id: 13,
    title: "Which operator runs inner observables concurrently (in parallel)?",
    options: [
      { id: 1, text: "mergeMap" }, // correct
      { id: 2, text: "concatMap" },
      { id: 3, text: "exhaustMap" },
      { id: 4, text: "switchMap" }
    ]
  },
  {
    id: 14,
    title: "What is the idiomatic way to auto-subscribe and unsubscribe in a template?",
    options: [
      { id: 1, text: "The async pipe" }, // correct
      { id: 2, text: "ngOnInit" },
      { id: 3, text: "A computed signal" },
      { id: 4, text: "track in @for" }
    ]
  },
  {
    id: 15,
    title: "Which DI mechanism lets you inject non-class values (like config)?",
    options: [
      { id: 1, text: "Provider" },
      { id: 2, text: "InjectionToken" }, // correct
      { id: 3, text: "NgModule" },
      { id: 4, text: "Directive" }
    ]
  },
  {
    id: 16,
    title: "What does 'multi: true' on a provider do?",
    options: [
      { id: 1, text: "Allows multiple providers for one token, injected as an array" }, // correct
      { id: 2, text: "Creates a singleton instance" },
      { id: 3, text: "Disables the provider" },
      { id: 4, text: "Makes the provider lazy" }
    ]
  },
  {
    id: 17,
    title: "Which provider strategy maps a token to an existing instance?",
    options: [
      { id: 1, text: "useValue" },
      { id: 2, text: "useFactory" },
      { id: 3, text: "useExisting" }, // correct
      { id: 4, text: "useClass" }
    ]
  },
  {
    id: 18,
    title: "Which provider strategy creates a dependency from a function?",
    options: [
      { id: 1, text: "useFactory" }, // correct
      { id: 2, text: "useClass" },
      { id: 3, text: "useValue" },
      { id: 4, text: "useExisting" }
    ]
  },
  {
    id: 19,
    title: "How do you lazy-load a standalone component in a route?",
    options: [
      { id: 1, text: "loadChildren" },
      { id: 2, text: "loadComponent" }, // correct
      { id: 3, text: "lazyLoad" },
      { id: 4, text: "import()" }
    ]
  },
  {
    id: 20,
    title: "What bootstraps a standalone Angular application?",
    options: [
      { id: 1, text: "platformBrowserDynamic().bootstrapModule(AppModule)" },
      { id: 2, text: "bootstrapApplication() with an ApplicationConfig" }, // correct
      { id: 3, text: "NgModule.bootstrap" },
      { id: 4, text: "main.module.ts" }
    ]
  },
  {
    id: 21,
    title: "Which functional guard type controls whether a route can be activated?",
    options: [
      { id: 1, text: "CanActivateFn" }, // correct
      { id: 2, text: "ResolveFn" },
      { id: 3, text: "CanLoadFn" },
      { id: 4, text: "RouteGuardFn" }
    ]
  },
  {
    id: 22,
    title: "What is the purpose of a route resolver (ResolveFn)?",
    options: [
      { id: 1, text: "Block navigation permanently" },
      { id: 2, text: "Pre-fetch data before a route activates" }, // correct
      { id: 3, text: "Lazy-load a module" },
      { id: 4, text: "Redirect to another route" }
    ]
  },
  {
    id: 23,
    title: "What does an @defer block do?",
    options: [
      { id: 1, text: "Eagerly loads everything up front" },
      { id: 2, text: "Lazily loads a block of template and its dependencies" }, // correct
      { id: 3, text: "Defers change detection only" },
      { id: 4, text: "Caches HTTP requests" }
    ]
  },
  {
    id: 24,
    title: "Which @defer trigger loads the block when it scrolls into view?",
    options: [
      { id: 1, text: "on idle" },
      { id: 2, text: "on interaction" },
      { id: 3, text: "on viewport" }, // correct
      { id: 4, text: "on hover" }
    ]
  },
  {
    id: 25,
    title: "What does the hostDirectives feature enable?",
    options: [
      { id: 1, text: "Applying/composing directives onto a host component" }, // correct
      { id: 2, text: "Styling the host element only" },
      { id: 3, text: "Creating a new component at runtime" },
      { id: 4, text: "Injecting a service into the DOM" }
    ]
  },
  {
    id: 26,
    title: "Which class is used to create embedded views from a TemplateRef?",
    options: [
      { id: 1, text: "TemplateRef" },
      { id: 2, text: "ViewContainerRef" }, // correct
      { id: 3, text: "ElementRef" },
      { id: 4, text: "Renderer2" }
    ]
  },
  {
    id: 27,
    title: "Which signal-based query retrieves a single child from the view?",
    options: [
      { id: 1, text: "contentChild()" },
      { id: 2, text: "viewChildren()" },
      { id: 3, text: "viewChild()" }, // correct
      { id: 4, text: "querySelector()" }
    ]
  },
  {
    id: 28,
    title: "What is the modern functional HTTP interceptor type?",
    options: [
      { id: 1, text: "HttpInterceptorFn" }, // correct
      { id: 2, text: "HttpHandler" },
      { id: 3, text: "HttpClientModule" },
      { id: 4, text: "HttpGuard" }
    ]
  },
  {
    id: 29,
    title: "Which API runs a one-time callback after the next render to the DOM?",
    options: [
      { id: 1, text: "ngOnInit" },
      { id: 2, text: "afterNextRender()" }, // correct
      { id: 3, text: "ngAfterViewInit" },
      { id: 4, text: "constructor" }
    ]
  },
  {
    id: 30,
    title: "What does provideClientHydration() enable?",
    options: [
      { id: 1, text: "It disables server-side rendering" },
      { id: 2, text: "Non-destructive hydration of server-rendered markup" }, // correct
      { id: 3, text: "A service worker" },
      { id: 4, text: "Route-level lazy loading" }
    ]
  },

  // ---------- Multi-option (31-70) ----------
  {
    id: 31,
    title: "Which of the following are signal-related APIs?",
    isMultiOption: true,
    options: [
      { id: 1, text: "signal()" }, // correct
      { id: 2, text: "computed()" }, // correct
      { id: 3, text: "effect()" }, // correct
      { id: 4, text: "untracked()" } // correct
    ]
  },
  {
    id: 32,
    title: "Which of these create reactive state or inputs using signals?",
    isMultiOption: true,
    options: [
      { id: 1, text: "signal()" }, // correct
      { id: 2, text: "input()" }, // correct
      { id: 3, text: "model()" }, // correct
      { id: 4, text: "linkedSignal()" } // correct
    ]
  },
  {
    id: 33,
    title: "Which of these are RxJS higher-order (flattening) operators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "switchMap" }, // correct
      { id: 2, text: "mergeMap" }, // correct
      { id: 3, text: "concatMap" }, // correct
      { id: 4, text: "exhaustMap" } // correct
    ]
  },
  {
    id: 34,
    title: "Which of these are types of RxJS Subjects?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Subject" }, // correct
      { id: 2, text: "BehaviorSubject" }, // correct
      { id: 3, text: "ReplaySubject" }, // correct
      { id: 4, text: "AsyncSubject" } // correct
    ]
  },
  {
    id: 35,
    title: "Which of these are valid provider definition strategies?",
    isMultiOption: true,
    options: [
      { id: 1, text: "useClass" }, // correct
      { id: 2, text: "useValue" }, // correct
      { id: 3, text: "useFactory" }, // correct
      { id: 4, text: "useExisting" } // correct
    ]
  },
  {
    id: 36,
    title: "Which of these are built-in @defer triggers?",
    isMultiOption: true,
    options: [
      { id: 1, text: "on idle" }, // correct
      { id: 2, text: "on viewport" }, // correct
      { id: 3, text: "on interaction" }, // correct
      { id: 4, text: "on scroll" }
    ]
  },
  {
    id: 37,
    title: "Which sub-blocks can accompany an @defer block?",
    isMultiOption: true,
    options: [
      { id: 1, text: "@placeholder" }, // correct
      { id: 2, text: "@loading" }, // correct
      { id: 3, text: "@error" }, // correct
      { id: 4, text: "@ready" }
    ]
  },
  {
    id: 38,
    title: "Which of these are functional router guard/resolver types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "CanActivateFn" }, // correct
      { id: 2, text: "CanDeactivateFn" }, // correct
      { id: 3, text: "ResolveFn" }, // correct
      { id: 4, text: "CanMatchFn" } // correct
    ]
  },
  {
    id: 39,
    title: "Which techniques help optimize change detection / performance?",
    isMultiOption: true,
    options: [
      { id: 1, text: "OnPush change detection" }, // correct
      { id: 2, text: "track in @for" }, // correct
      { id: 3, text: "@defer lazy loading" }, // correct
      { id: 4, text: "Pure pipes" } // correct
    ]
  },
  {
    id: 40,
    title: "Which of these are reactive forms building blocks?",
    isMultiOption: true,
    options: [
      { id: 1, text: "FormControl" }, // correct
      { id: 2, text: "FormGroup" }, // correct
      { id: 3, text: "FormArray" }, // correct
      { id: 4, text: "FormBuilder" } // correct
    ]
  },
  {
    id: 41,
    title: "Which events trigger change detection on an OnPush component?",
    isMultiOption: true,
    options: [
      { id: 1, text: "An input reference change" }, // correct
      { id: 2, text: "An event raised from within the component" }, // correct
      { id: 3, text: "An async pipe emission" }, // correct
      { id: 4, text: "A signal read in the template updating" } // correct
    ]
  },
  {
    id: 42,
    title: "Which of these are valid validators usage in reactive forms?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Validators.required" }, // correct
      { id: 2, text: "Validators.minLength(n)" }, // correct
      { id: 3, text: "A custom ValidatorFn" }, // correct
      { id: 4, text: "Validators.unique" }
    ]
  },
  {
    id: 43,
    title: "Which of these are signal-based query functions?",
    isMultiOption: true,
    options: [
      { id: 1, text: "viewChild()" }, // correct
      { id: 2, text: "viewChildren()" }, // correct
      { id: 3, text: "contentChild()" }, // correct
      { id: 4, text: "contentChildren()" } // correct
    ]
  },
  {
    id: 44,
    title: "Which of these are content projection / template tools?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ng-content" }, // correct
      { id: 2, text: "ng-template" }, // correct
      { id: 3, text: "ng-container" }, // correct
      { id: 4, text: "ngTemplateOutlet" } // correct
    ]
  },
  {
    id: 45,
    title: "Which statements about standalone components are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They use the 'imports' array directly" }, // correct
      { id: 2, text: "They do not require an NgModule" }, // correct
      { id: 3, text: "They are the default in modern Angular" }, // correct
      { id: 4, text: "They can be lazy-loaded via loadComponent" } // correct
    ]
  },
  {
    id: 46,
    title: "Which utilities bridge RxJS and signals / reactivity?",
    isMultiOption: true,
    options: [
      { id: 1, text: "toSignal()" }, // correct
      { id: 2, text: "toObservable()" }, // correct
      { id: 3, text: "takeUntilDestroyed()" }, // correct
      { id: 4, text: "outputFromObservable()" } // correct
    ]
  },
  {
    id: 47,
    title: "Which of these are lifecycle or render hooks?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ngOnInit" }, // correct
      { id: 2, text: "ngOnDestroy" }, // correct
      { id: 3, text: "afterNextRender()" }, // correct
      { id: 4, text: "afterRender()" } // correct
    ]
  },
  {
    id: 48,
    title: "Which of these relate to SSR / hydration in Angular?",
    isMultiOption: true,
    options: [
      { id: 1, text: "provideClientHydration()" }, // correct
      { id: 2, text: "Server-side rendering" }, // correct
      { id: 3, text: "Incremental hydration" }, // correct
      { id: 4, text: "TransferState" } // correct
    ]
  },
  {
    id: 49,
    title: "Which of these are Angular dependency injection concepts?",
    isMultiOption: true,
    options: [
      { id: 1, text: "InjectionToken" }, // correct
      { id: 2, text: "Hierarchical injectors" }, // correct
      { id: 3, text: "Multi providers" }, // correct
      { id: 4, text: "ngModel" }
    ]
  },
  {
    id: 50,
    title: "Which of these are valid ways for components to communicate?",
    isMultiOption: true,
    options: [
      { id: 1, text: "input() for parent-to-child" }, // correct
      { id: 2, text: "output() for child-to-parent" }, // correct
      { id: 3, text: "A shared service using signals" }, // correct
      { id: 4, text: "model() for two-way binding" } // correct
    ]
  },
  {
    id: 51,
    title: "Which statements about the async pipe are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It subscribes automatically" }, // correct
      { id: 2, text: "It unsubscribes when the component is destroyed" }, // correct
      { id: 3, text: "It works with Observables and Promises" }, // correct
      { id: 4, text: "It marks the component for change detection on emission" } // correct
    ]
  },
  {
    id: 52,
    title: "Which of these are RxJS creation operators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "of" }, // correct
      { id: 2, text: "from" }, // correct
      { id: 3, text: "interval" }, // correct
      { id: 4, text: "subscribe" }
    ]
  },
  {
    id: 53,
    title: "Which of these are RxJS error/completion handling operators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "catchError" }, // correct
      { id: 2, text: "retry" }, // correct
      { id: 3, text: "finalize" }, // correct
      { id: 4, text: "switchMap" }
    ]
  },
  {
    id: 54,
    title: "Which statements comparing signals and RxJS are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Signal reads are synchronous" }, // correct
      { id: 2, text: "Signals are pull-based when read" }, // correct
      { id: 3, text: "RxJS excels at async event streams" }, // correct
      { id: 4, text: "computed() derives state from other signals" } // correct
    ]
  },
  {
    id: 55,
    title: "Which are valid places/ways to provide dependencies?",
    isMultiOption: true,
    options: [
      { id: 1, text: "providedIn: 'root'" }, // correct
      { id: 2, text: "A component's providers array" }, // correct
      { id: 3, text: "providers in ApplicationConfig" }, // correct
      { id: 4, text: "Route-level providers" } // correct
    ]
  },
  {
    id: 56,
    title: "Which statements about structural directives are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They change the DOM layout/structure" }, // correct
      { id: 2, text: "Legacy ones use the * prefix" }, // correct
      { id: 3, text: "@if/@for now cover the common cases" }, // correct
      { id: 4, text: "They typically use TemplateRef + ViewContainerRef" } // correct
    ]
  },
  {
    id: 57,
    title: "Which statements about HttpClient interceptors are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They can modify outgoing requests" }, // correct
      { id: 2, text: "They can handle responses and errors" }, // correct
      { id: 3, text: "Functional ones use HttpInterceptorFn" }, // correct
      { id: 4, text: "They are registered via withInterceptors()" } // correct
    ]
  },
  {
    id: 58,
    title: "Which of these are common Angular performance pitfalls to avoid?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Heavy computation directly in templates" }, // correct
      { id: 2, text: "Overusing impure pipes" }, // correct
      { id: 3, text: "Not using OnPush or track" }, // correct
      { id: 4, text: "Large eager (non-lazy) bundles" } // correct
    ]
  },
  {
    id: 59,
    title: "Which statements about the @for control flow block are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It requires a track expression" }, // correct
      { id: 2, text: "It supports an @empty block" }, // correct
      { id: 3, text: "It exposes $index, $first, $last, etc." }, // correct
      { id: 4, text: "It replaces *ngFor" } // correct
    ]
  },
  {
    id: 60,
    title: "Which of these are Angular testing utilities?",
    isMultiOption: true,
    options: [
      { id: 1, text: "TestBed" }, // correct
      { id: 2, text: "ComponentFixture" }, // correct
      { id: 3, text: "fakeAsync" }, // correct
      { id: 4, text: "RouterOutlet" }
    ]
  },
  {
    id: 61,
    title: "Which statements about Angular pipes are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Pipes can be pure or impure" }, // correct
      { id: 2, text: "Custom pipes are created with @Pipe" }, // correct
      { id: 3, text: "The async pipe handles Observables/Promises" }, // correct
      { id: 4, text: "A pipe implements a transform() method" } // correct
    ]
  },
  {
    id: 62,
    title: "Which are function-based signal input/output APIs?",
    isMultiOption: true,
    options: [
      { id: 1, text: "input()" }, // correct
      { id: 2, text: "input.required()" }, // correct
      { id: 3, text: "output()" }, // correct
      { id: 4, text: "model()" } // correct
    ]
  },
  {
    id: 63,
    title: "Which statements about effect() are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It runs side effects when read signals change" }, // correct
      { id: 2, text: "It must be created in an injection context (by default)" }, // correct
      { id: 3, text: "It can register cleanup via onCleanup" }, // correct
      { id: 4, text: "It runs at least once initially" } // correct
    ]
  },
  {
    id: 64,
    title: "Which of these are valid Route configuration properties?",
    isMultiOption: true,
    options: [
      { id: 1, text: "path" }, // correct
      { id: 2, text: "component / loadComponent" }, // correct
      { id: 3, text: "children" }, // correct
      { id: 4, text: "canActivate" } // correct
    ]
  },
  {
    id: 65,
    title: "Which are safe ways to manage RxJS subscriptions?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Use the async pipe" }, // correct
      { id: 2, text: "Use takeUntilDestroyed()" }, // correct
      { id: 3, text: "Unsubscribe manually in ngOnDestroy" }, // correct
      { id: 4, text: "Use take(1) for one-shot streams" } // correct
    ]
  },
  {
    id: 66,
    title: "Which of these are core NgRx state-management concepts?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Store" }, // correct
      { id: 2, text: "Actions" }, // correct
      { id: 3, text: "Reducers" }, // correct
      { id: 4, text: "Components" }
    ]
  },
  {
    id: 67,
    title: "Which statements about ng-template and ng-container are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ng-template defines a template that is not rendered by default" }, // correct
      { id: 2, text: "ng-container groups elements without adding DOM" }, // correct
      { id: 3, text: "TemplateRef references a template" }, // correct
      { id: 4, text: "Templates render via ViewContainerRef or ngTemplateOutlet" } // correct
    ]
  },
  {
    id: 68,
    title: "Which statements about Renderer2 and ElementRef are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Renderer2 abstracts DOM manipulation" }, // correct
      { id: 2, text: "ElementRef wraps a native element" }, // correct
      { id: 3, text: "They help keep code SSR-safe vs. direct DOM access" }, // correct
      { id: 4, text: "They can be injected into directives/components" } // correct
    ]
  },
  {
    id: 69,
    title: "Which of these are change-detection APIs/utilities?",
    isMultiOption: true,
    options: [
      { id: 1, text: "ChangeDetectorRef.markForCheck()" }, // correct
      { id: 2, text: "ChangeDetectorRef.detectChanges()" }, // correct
      { id: 3, text: "ChangeDetectorRef.detach()" }, // correct
      { id: 4, text: "ChangeDetectionStrategy.OnPush" } // correct
    ]
  },
  {
    id: 70,
    title: "Which of these are modern Angular build/dev features?",
    isMultiOption: true,
    options: [
      { id: 1, text: "esbuild-based application builder" }, // correct
      { id: 2, text: "Vite-powered dev server" }, // correct
      { id: 3, text: "Built-in SSR support" }, // correct
      { id: 4, text: "Hybrid rendering (SSR + prerender + CSR)" } // correct
    ]
  }
];

export const advancedAngularAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [2] },
  { questionId: 3, correctOptionIds: [1] },
  { questionId: 4, correctOptionIds: [2] },
  { questionId: 5, correctOptionIds: [3] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [1] },
  { questionId: 8, correctOptionIds: [2] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [3] },
  { questionId: 11, correctOptionIds: [1] },
  { questionId: 12, correctOptionIds: [4] },
  { questionId: 13, correctOptionIds: [1] },
  { questionId: 14, correctOptionIds: [1] },
  { questionId: 15, correctOptionIds: [2] },
  { questionId: 16, correctOptionIds: [1] },
  { questionId: 17, correctOptionIds: [3] },
  { questionId: 18, correctOptionIds: [1] },
  { questionId: 19, correctOptionIds: [2] },
  { questionId: 20, correctOptionIds: [2] },
  { questionId: 21, correctOptionIds: [1] },
  { questionId: 22, correctOptionIds: [2] },
  { questionId: 23, correctOptionIds: [2] },
  { questionId: 24, correctOptionIds: [3] },
  { questionId: 25, correctOptionIds: [1] },
  { questionId: 26, correctOptionIds: [2] },
  { questionId: 27, correctOptionIds: [3] },
  { questionId: 28, correctOptionIds: [1] },
  { questionId: 29, correctOptionIds: [2] },
  { questionId: 30, correctOptionIds: [2] },
  { questionId: 31, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 32, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 33, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 34, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 35, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 36, correctOptionIds: [1, 2, 3] },
  { questionId: 37, correctOptionIds: [1, 2, 3] },
  { questionId: 38, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 39, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 40, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 41, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 42, correctOptionIds: [1, 2, 3] },
  { questionId: 43, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 44, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 45, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 46, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 47, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 48, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 49, correctOptionIds: [1, 2, 3] },
  { questionId: 50, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 51, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 52, correctOptionIds: [1, 2, 3] },
  { questionId: 53, correctOptionIds: [1, 2, 3] },
  { questionId: 54, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 55, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 56, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 57, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 58, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 59, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 60, correctOptionIds: [1, 2, 3] },
  { questionId: 61, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 62, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 63, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 64, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 65, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 66, correctOptionIds: [1, 2, 3] },
  { questionId: 67, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 68, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 69, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 70, correctOptionIds: [1, 2, 3, 4] }
];

export const advanceAngularExam: ExamSubject = {
  id: signal("ng-300"),
  title: signal("Advanced Angular Developer"),
  duration: signal({hour: 1, minute: 30, second: 0}),
  questions: signal<QuizQuestion[]>(advancedAngularQuestions),
}

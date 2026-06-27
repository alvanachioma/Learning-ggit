import { QuizQuestion, AnswerKey, ExamSubject } from './exam-question-services';
import { signal } from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// JavaScript — Beginner to Advanced
// 50 questions. Multi-choice questions (isMultiOption: true) are scattered
// randomly and have at most 3 correct options. Correct option(s) tagged with
// "// correct". See jsAnswers for the answer key, jsExam for the subject.
// ============================================================================
export const jsQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Which keyword declares a block-scoped variable?",
    options: [
      { id: 1, text: "let" }, // correct
      { id: 2, text: "int" },
      { id: 3, text: "static" },
      { id: 4, text: "dim" }
    ]
  },
  {
    id: 2,
    title: "Which keyword declares a constant?",
    options: [
      { id: 1, text: "const" }, // correct
      { id: 2, text: "final" },
      { id: 3, text: "readonly" },
      { id: 4, text: "let" }
    ]
  },
  {
    id: 3,
    title: "Which of these are valid ways to declare variables?",
    isMultiOption: true,
    options: [
      { id: 1, text: "var" }, // correct
      { id: 2, text: "let" }, // correct
      { id: 3, text: "const" }, // correct
      { id: 4, text: "def" }
    ]
  },
  {
    id: 4,
    title: "Which operator checks both value and type equality?",
    options: [
      { id: 1, text: "==" },
      { id: 2, text: "===" }, // correct
      { id: 3, text: "=" },
      { id: 4, text: "!=" }
    ]
  },
  {
    id: 5,
    title: "Which of these are JavaScript primitive types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "string" }, // correct
      { id: 2, text: "number" }, // correct
      { id: 3, text: "boolean" }, // correct
      { id: 4, text: "array" }
    ]
  },
  {
    id: 6,
    title: "What does typeof null return?",
    options: [
      { id: 1, text: "\"null\"" },
      { id: 2, text: "\"object\"" }, // correct
      { id: 3, text: "\"undefined\"" },
      { id: 4, text: "\"number\"" }
    ]
  },
  {
    id: 7,
    title: "Which method adds an element to the end of an array?",
    options: [
      { id: 1, text: "push()" }, // correct
      { id: 2, text: "add()" },
      { id: 3, text: "append()" },
      { id: 4, text: "insert()" }
    ]
  },
  {
    id: 8,
    title: "Which method removes the last element of an array?",
    options: [
      { id: 1, text: "pop()" }, // correct
      { id: 2, text: "removeLast()" },
      { id: 3, text: "shift()" },
      { id: 4, text: "delete()" }
    ]
  },
  {
    id: 9,
    title: "Which of these are array methods?",
    isMultiOption: true,
    options: [
      { id: 1, text: "map()" }, // correct
      { id: 2, text: "filter()" }, // correct
      { id: 3, text: "reduce()" }, // correct
      { id: 4, text: "loop()" }
    ]
  },
  {
    id: 10,
    title: "Which method creates a new array from the results of a function?",
    options: [
      { id: 1, text: "map()" }, // correct
      { id: 2, text: "forEach()" },
      { id: 3, text: "filter()" },
      { id: 4, text: "each()" }
    ]
  },
  {
    id: 11,
    title: "Which method returns a new array of elements that pass a test?",
    options: [
      { id: 1, text: "filter()" }, // correct
      { id: 2, text: "find()" },
      { id: 3, text: "select()" },
      { id: 4, text: "where()" }
    ]
  },
  {
    id: 12,
    title: "Which of these are valid ways to create a function?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Function declaration" }, // correct
      { id: 2, text: "Function expression" }, // correct
      { id: 3, text: "Arrow function" }, // correct
      { id: 4, text: "The lambda keyword" }
    ]
  },
  {
    id: 13,
    title: "Which is the correct arrow function syntax?",
    options: [
      { id: 1, text: "() => {}" }, // correct
      { id: 2, text: "function => {}" },
      { id: 3, text: "=> () {}" },
      { id: 4, text: "->() {}" }
    ]
  },
  {
    id: 14,
    title: "Which of these are falsy values in JavaScript?",
    isMultiOption: true,
    options: [
      { id: 1, text: "0" }, // correct
      { id: 2, text: "\"\" (empty string)" }, // correct
      { id: 3, text: "null" }, // correct
      { id: 4, text: "[] (empty array)" }
    ]
  },
  {
    id: 15,
    title: "How does === differ from ==?",
    options: [
      { id: 1, text: "They are identical" },
      { id: 2, text: "=== checks type and value; == coerces types" }, // correct
      { id: 3, text: "== checks type; === does not" },
      { id: 4, text: "=== is the assignment operator" }
    ]
  },
  {
    id: 16,
    title: "Which construct handles runtime exceptions?",
    options: [
      { id: 1, text: "try...catch" }, // correct
      { id: 2, text: "catch...throw" },
      { id: 3, text: "rescue" },
      { id: 4, text: "error...handle" }
    ]
  },
  {
    id: 17,
    title: "Which of these are valid loop constructs?",
    isMultiOption: true,
    options: [
      { id: 1, text: "for" }, // correct
      { id: 2, text: "while" }, // correct
      { id: 3, text: "for...of" }, // correct
      { id: 4, text: "foreach (keyword)" }
    ]
  },
  {
    id: 18,
    title: "Which method parses a JSON string into an object?",
    options: [
      { id: 1, text: "JSON.parse()" }, // correct
      { id: 2, text: "JSON.toObject()" },
      { id: 3, text: "JSON.stringify()" },
      { id: 4, text: "parseJSON()" }
    ]
  },
  {
    id: 19,
    title: "Which method converts an object into a JSON string?",
    options: [
      { id: 1, text: "JSON.stringify()" }, // correct
      { id: 2, text: "JSON.toString()" },
      { id: 3, text: "JSON.parse()" },
      { id: 4, text: "stringify()" }
    ]
  },
  {
    id: 20,
    title: "Which of these are ways to handle asynchronous code?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Callbacks" }, // correct
      { id: 2, text: "Promises" }, // correct
      { id: 3, text: "async/await" }, // correct
      { id: 4, text: "Synchronized blocks" }
    ]
  },
  {
    id: 21,
    title: "What does a Promise represent?",
    options: [
      { id: 1, text: "A synchronous value" },
      { id: 2, text: "The eventual result of an asynchronous operation" }, // correct
      { id: 3, text: "A DOM node" },
      { id: 4, text: "A loop" }
    ]
  },
  {
    id: 22,
    title: "Which keyword pauses an async function until a promise settles?",
    options: [
      { id: 1, text: "yield" },
      { id: 2, text: "await" }, // correct
      { id: 3, text: "wait" },
      { id: 4, text: "defer" }
    ]
  },
  {
    id: 23,
    title: "Which of these are valid Promise instance methods?",
    isMultiOption: true,
    options: [
      { id: 1, text: ".then()" }, // correct
      { id: 2, text: ".catch()" }, // correct
      { id: 3, text: ".await()" },
      { id: 4, text: ".resolveAll()" }
    ]
  },
  {
    id: 24,
    title: "What is the scope of a var declaration?",
    options: [
      { id: 1, text: "Block scope" },
      { id: 2, text: "Function scope" }, // correct
      { id: 3, text: "Global only" },
      { id: 4, text: "No scope" }
    ]
  },
  {
    id: 25,
    title: "Which statements about let and const are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They are block-scoped" }, // correct
      { id: 2, text: "const cannot be reassigned" }, // correct
      { id: 3, text: "They cannot be used before declaration (temporal dead zone)" }, // correct
      { id: 4, text: "They leak to the global object like var" }
    ]
  },
  {
    id: 26,
    title: "What does the spread operator (...) do?",
    options: [
      { id: 1, text: "Expands an iterable into individual elements" }, // correct
      { id: 2, text: "Comments out code" },
      { id: 3, text: "Concatenates strings only" },
      { id: 4, text: "Deletes properties" }
    ]
  },
  {
    id: 27,
    title: "Which of these use the spread/rest (...) syntax?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Spread in an array literal" }, // correct
      { id: 2, text: "Rest parameters in a function" }, // correct
      { id: 3, text: "Spread in an object literal" }, // correct
      { id: 4, text: "The ternary operator" }
    ]
  },
  {
    id: 28,
    title: "What does Array.isArray() check?",
    options: [
      { id: 1, text: "Whether a value is an array" }, // correct
      { id: 2, text: "The array's length" },
      { id: 3, text: "If an array is empty" },
      { id: 4, text: "The type of array elements" }
    ]
  },
  {
    id: 29,
    title: "Which method joins array elements into a single string?",
    options: [
      { id: 1, text: "join()" }, // correct
      { id: 2, text: "concat()" },
      { id: 3, text: "merge()" },
      { id: 4, text: "combine()" }
    ]
  },
  {
    id: 30,
    title: "Which of these are string methods?",
    isMultiOption: true,
    options: [
      { id: 1, text: "slice()" }, // correct
      { id: 2, text: "toUpperCase()" }, // correct
      { id: 3, text: "includes()" }, // correct
      { id: 4, text: "push()" }
    ]
  },
  {
    id: 31,
    title: "What is a closure?",
    options: [
      { id: 1, text: "A function with no arguments" },
      { id: 2, text: "A function that retains access to variables from its outer scope" }, // correct
      { id: 3, text: "A self-closing HTML tag" },
      { id: 4, text: "A private class only" }
    ]
  },
  {
    id: 32,
    title: "Which of these are truthy values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "\"hello\"" }, // correct
      { id: 2, text: "1" }, // correct
      { id: 3, text: "[] (empty array)" }, // correct
      { id: 4, text: "0" }
    ]
  },
  {
    id: 33,
    title: "In a plain (non-strict) function call, what does 'this' refer to?",
    options: [
      { id: 1, text: "The global object" }, // correct
      { id: 2, text: "Always undefined" },
      { id: 3, text: "The function itself" },
      { id: 4, text: "The parent element" }
    ]
  },
  {
    id: 34,
    title: "Which of these are comparison or logical operators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "&&" }, // correct
      { id: 2, text: "||" }, // correct
      { id: 3, text: "===" }, // correct
      { id: 4, text: "=>" }
    ]
  },
  {
    id: 35,
    title: "Which method attaches an event handler to an element?",
    options: [
      { id: 1, text: "addEventListener()" }, // correct
      { id: 2, text: "on()" },
      { id: 3, text: "attachEvent()" },
      { id: 4, text: "listen()" }
    ]
  },
  {
    id: 36,
    title: "Which method selects an element by its id?",
    options: [
      { id: 1, text: "document.getElementById()" }, // correct
      { id: 2, text: "document.getId()" },
      { id: 3, text: "document.querySelectorId()" },
      { id: 4, text: "getById()" }
    ]
  },
  {
    id: 37,
    title: "Which of these are DOM element selection methods?",
    isMultiOption: true,
    options: [
      { id: 1, text: "getElementById()" }, // correct
      { id: 2, text: "querySelector()" }, // correct
      { id: 3, text: "getElementsByClassName()" }, // correct
      { id: 4, text: "selectNode()" }
    ]
  },
  {
    id: 38,
    title: "What does event.preventDefault() do?",
    options: [
      { id: 1, text: "Stops the event's default browser action" }, // correct
      { id: 2, text: "Stops event propagation" },
      { id: 3, text: "Removes the listener" },
      { id: 4, text: "Reloads the page" }
    ]
  },
  {
    id: 39,
    title: "Which of these are valid ways to create an object?",
    isMultiOption: true,
    options: [
      { id: 1, text: "An object literal {}" }, // correct
      { id: 2, text: "new Object()" }, // correct
      { id: 3, text: "Object.make()" },
      { id: 4, text: "createObject()" }
    ]
  },
  {
    id: 40,
    title: "Which operator safely accesses a property when the object may be null?",
    options: [
      { id: 1, text: "?." }, // correct
      { id: 2, text: "??" },
      { id: 3, text: "?:" },
      { id: 4, text: "&." }
    ]
  },
  {
    id: 41,
    title: "What does the nullish coalescing operator (??) do?",
    options: [
      { id: 1, text: "Returns the right operand when the left is null or undefined" }, // correct
      { id: 2, text: "Performs logical AND" },
      { id: 3, text: "Performs a bitwise OR" },
      { id: 4, text: "Is a ternary shortcut" }
    ]
  },
  {
    id: 42,
    title: "Which of these are ES6+ (modern) features?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Arrow functions" }, // correct
      { id: 2, text: "Template literals" }, // correct
      { id: 3, text: "Destructuring" }, // correct
      { id: 4, text: "var hoisting" }
    ]
  },
  {
    id: 43,
    title: "Which is the correct template literal syntax?",
    options: [
      { id: 1, text: "`Hello ${name}`" }, // correct
      { id: 2, text: "\"Hello {name}\"" },
      { id: 3, text: "'Hello $name'" },
      { id: 4, text: "\"Hello\" + name only" }
    ]
  },
  {
    id: 44,
    title: "What does destructuring do?",
    options: [
      { id: 1, text: "Unpacks values from arrays or objects into variables" }, // correct
      { id: 2, text: "Deletes an object" },
      { id: 3, text: "Merges two arrays" },
      { id: 4, text: "Sorts data" }
    ]
  },
  {
    id: 45,
    title: "Which of these can iterate over an array?",
    isMultiOption: true,
    options: [
      { id: 1, text: "forEach()" }, // correct
      { id: 2, text: "map()" }, // correct
      { id: 3, text: "for...of" }, // correct
      { id: 4, text: "JSON.parse()" }
    ]
  },
  {
    id: 46,
    title: "What does setTimeout() do?",
    options: [
      { id: 1, text: "Runs a function once after a delay" }, // correct
      { id: 2, text: "Loops forever" },
      { id: 3, text: "Stops execution permanently" },
      { id: 4, text: "Runs a function immediately" }
    ]
  },
  {
    id: 47,
    title: "Which statements about the === operator are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It checks the type" }, // correct
      { id: 2, text: "It checks the value" }, // correct
      { id: 3, text: "It does not coerce types" }, // correct
      { id: 4, text: "It rounds numbers before comparing" }
    ]
  },
  {
    id: 48,
    title: "Which keyword defines a class?",
    options: [
      { id: 1, text: "class" }, // correct
      { id: 2, text: "struct" },
      { id: 3, text: "object" },
      { id: 4, text: "prototype" }
    ]
  },
  {
    id: 49,
    title: "Which of these are valid features of ES6 classes?",
    isMultiOption: true,
    options: [
      { id: 1, text: "A constructor" }, // correct
      { id: 2, text: "Methods" }, // correct
      { id: 3, text: "extends for inheritance" }, // correct
      { id: 4, text: "The interface keyword" }
    ]
  },
  {
    id: 50,
    title: "What does the 'new' keyword do?",
    options: [
      { id: 1, text: "Creates a new instance of an object/class" }, // correct
      { id: 2, text: "Declares a variable" },
      { id: 3, text: "Deletes an object" },
      { id: 4, text: "Imports a module" }
    ]
  }
];

export const jsAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [1] },
  { questionId: 3, correctOptionIds: [1, 2, 3] },
  { questionId: 4, correctOptionIds: [2] },
  { questionId: 5, correctOptionIds: [1, 2, 3] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [1] },
  { questionId: 8, correctOptionIds: [1] },
  { questionId: 9, correctOptionIds: [1, 2, 3] },
  { questionId: 10, correctOptionIds: [1] },
  { questionId: 11, correctOptionIds: [1] },
  { questionId: 12, correctOptionIds: [1, 2, 3] },
  { questionId: 13, correctOptionIds: [1] },
  { questionId: 14, correctOptionIds: [1, 2, 3] },
  { questionId: 15, correctOptionIds: [2] },
  { questionId: 16, correctOptionIds: [1] },
  { questionId: 17, correctOptionIds: [1, 2, 3] },
  { questionId: 18, correctOptionIds: [1] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [1, 2, 3] },
  { questionId: 21, correctOptionIds: [2] },
  { questionId: 22, correctOptionIds: [2] },
  { questionId: 23, correctOptionIds: [1, 2] },
  { questionId: 24, correctOptionIds: [2] },
  { questionId: 25, correctOptionIds: [1, 2, 3] },
  { questionId: 26, correctOptionIds: [1] },
  { questionId: 27, correctOptionIds: [1, 2, 3] },
  { questionId: 28, correctOptionIds: [1] },
  { questionId: 29, correctOptionIds: [1] },
  { questionId: 30, correctOptionIds: [1, 2, 3] },
  { questionId: 31, correctOptionIds: [2] },
  { questionId: 32, correctOptionIds: [1, 2, 3] },
  { questionId: 33, correctOptionIds: [1] },
  { questionId: 34, correctOptionIds: [1, 2, 3] },
  { questionId: 35, correctOptionIds: [1] },
  { questionId: 36, correctOptionIds: [1] },
  { questionId: 37, correctOptionIds: [1, 2, 3] },
  { questionId: 38, correctOptionIds: [1] },
  { questionId: 39, correctOptionIds: [1, 2] },
  { questionId: 40, correctOptionIds: [1] },
  { questionId: 41, correctOptionIds: [1] },
  { questionId: 42, correctOptionIds: [1, 2, 3] },
  { questionId: 43, correctOptionIds: [1] },
  { questionId: 44, correctOptionIds: [1] },
  { questionId: 45, correctOptionIds: [1, 2, 3] },
  { questionId: 46, correctOptionIds: [1] },
  { questionId: 47, correctOptionIds: [1, 2, 3] },
  { questionId: 48, correctOptionIds: [1] },
  { questionId: 49, correctOptionIds: [1, 2, 3] },
  { questionId: 50, correctOptionIds: [1] }
];

const jsQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...jsQuestions]));
jsQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const jsExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal("js-100"),
  title: signal("JavaScript — Beginner to Advanced"),
  duration: signal({ hour: 1, minute: 5, second: 0 }),
  questions: jsQuestionsSignal
};

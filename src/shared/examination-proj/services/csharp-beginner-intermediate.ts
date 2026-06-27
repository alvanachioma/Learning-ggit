import {QuizQuestion, AnswerKey, ExamSubject} from './exam-question-services';
import {signal} from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// C# — Beginner & Intermediate Level
// 60 questions (48 single-answer, 12 multi-option). isMultiOption: true marks
// multi-select questions. Correct option(s) are tagged with "// correct".
// See csharpBeginnerAnswers for the answer key.
// ============================================================================
export const csharpBeginnerQuestions: QuizQuestion[] = [
  // ---------- Single-answer (1-48) ----------
  {
    id: 1,
    title: "What is C#?",
    options: [
      { id: 1, text: "A modern, object-oriented language developed by Microsoft" }, // correct
      { id: 2, text: "A markup language for the web" },
      { id: 3, text: "A relational database" },
      { id: 4, text: "An operating system" }
    ]
  },
  {
    id: 2,
    title: "Which runtime executes compiled C# code?",
    options: [
      { id: 1, text: "The JVM" },
      { id: 2, text: "The .NET runtime (CLR)" }, // correct
      { id: 3, text: "The V8 engine" },
      { id: 4, text: "The Python interpreter" }
    ]
  },
  {
    id: 3,
    title: "Which keyword declares a compile-time constant?",
    options: [
      { id: 1, text: "readonly" },
      { id: 2, text: "static" },
      { id: 3, text: "const" }, // correct
      { id: 4, text: "final" }
    ]
  },
  {
    id: 4,
    title: "Which of these is a value type?",
    options: [
      { id: 1, text: "int" }, // correct
      { id: 2, text: "string" },
      { id: 3, text: "object" },
      { id: 4, text: "class instance" }
    ]
  },
  {
    id: 5,
    title: "Which of these is a reference type?",
    options: [
      { id: 1, text: "int" },
      { id: 2, text: "bool" },
      { id: 3, text: "string" }, // correct
      { id: 4, text: "double" }
    ]
  },
  {
    id: 6,
    title: "What is the entry point method of a C# console application?",
    options: [
      { id: 1, text: "Start" },
      { id: 2, text: "Run" },
      { id: 3, text: "Main" }, // correct
      { id: 4, text: "Init" }
    ]
  },
  {
    id: 7,
    title: "Which symbol begins a single-line comment in C#?",
    options: [
      { id: 1, text: "//" }, // correct
      { id: 2, text: "#" },
      { id: 3, text: "--" },
      { id: 4, text: "<!--" }
    ]
  },
  {
    id: 8,
    title: "Which keyword defines a class?",
    options: [
      { id: 1, text: "struct" },
      { id: 2, text: "class" }, // correct
      { id: 3, text: "object" },
      { id: 4, text: "type" }
    ]
  },
  {
    id: 9,
    title: "Which keyword creates a new instance of a class?",
    options: [
      { id: 1, text: "create" },
      { id: 2, text: "make" },
      { id: 3, text: "new" }, // correct
      { id: 4, text: "instance" }
    ]
  },
  {
    id: 10,
    title: "Which access modifier makes a member accessible from anywhere?",
    options: [
      { id: 1, text: "private" },
      { id: 2, text: "public" }, // correct
      { id: 3, text: "protected" },
      { id: 4, text: "internal" }
    ]
  },
  {
    id: 11,
    title: "Which access modifier restricts a member to the declaring class only?",
    options: [
      { id: 1, text: "public" },
      { id: 2, text: "internal" },
      { id: 3, text: "private" }, // correct
      { id: 4, text: "protected" }
    ]
  },
  {
    id: 12,
    title: "What is the default access modifier for class members in C#?",
    options: [
      { id: 1, text: "public" },
      { id: 2, text: "private" }, // correct
      { id: 3, text: "protected" },
      { id: 4, text: "internal" }
    ]
  },
  {
    id: 13,
    title: "Which symbol is used to indicate inheritance in C#?",
    options: [
      { id: 1, text: "extends" },
      { id: 2, text: ": (colon)" }, // correct
      { id: 3, text: "-> " },
      { id: 4, text: "implements" }
    ]
  },
  {
    id: 14,
    title: "Which keyword prevents a class from being inherited?",
    options: [
      { id: 1, text: "static" },
      { id: 2, text: "const" },
      { id: 3, text: "sealed" }, // correct
      { id: 4, text: "final" }
    ]
  },
  {
    id: 15,
    title: "Which keyword allows a method to be overridden in a derived class?",
    options: [
      { id: 1, text: "virtual" }, // correct
      { id: 2, text: "sealed" },
      { id: 3, text: "static" },
      { id: 4, text: "const" }
    ]
  },
  {
    id: 16,
    title: "Which keyword overrides a base class method?",
    options: [
      { id: 1, text: "new" },
      { id: 2, text: "override" }, // correct
      { id: 3, text: "base" },
      { id: 4, text: "virtual" }
    ]
  },
  {
    id: 17,
    title: "What does the 'static' modifier mean for a member?",
    options: [
      { id: 1, text: "It belongs to the type itself, not an instance" }, // correct
      { id: 2, text: "It cannot be changed" },
      { id: 3, text: "It is only visible in the file" },
      { id: 4, text: "It runs asynchronously" }
    ]
  },
  {
    id: 18,
    title: "Which collection is a dynamically-sized list?",
    options: [
      { id: 1, text: "Array" },
      { id: 2, text: "List<T>" }, // correct
      { id: 3, text: "Tuple" },
      { id: 4, text: "Span<T>" }
    ]
  },
  {
    id: 19,
    title: "Which collection stores key-value pairs?",
    options: [
      { id: 1, text: "List<T>" },
      { id: 2, text: "HashSet<T>" },
      { id: 3, text: "Dictionary<TKey, TValue>" }, // correct
      { id: 4, text: "Stack<T>" }
    ]
  },
  {
    id: 20,
    title: "Which loop always executes its body at least once?",
    options: [
      { id: 1, text: "for" },
      { id: 2, text: "while" },
      { id: 3, text: "do-while" }, // correct
      { id: 4, text: "foreach" }
    ]
  },
  {
    id: 21,
    title: "Which keyword exits a loop immediately?",
    options: [
      { id: 1, text: "continue" },
      { id: 2, text: "break" }, // correct
      { id: 3, text: "return" },
      { id: 4, text: "exit" }
    ]
  },
  {
    id: 22,
    title: "Which keyword skips to the next loop iteration?",
    options: [
      { id: 1, text: "break" },
      { id: 2, text: "skip" },
      { id: 3, text: "continue" }, // correct
      { id: 4, text: "next" }
    ]
  },
  {
    id: 23,
    title: "Which construct handles runtime exceptions?",
    options: [
      { id: 1, text: "if-else" },
      { id: 2, text: "try-catch" }, // correct
      { id: 3, text: "switch" },
      { id: 4, text: "for" }
    ]
  },
  {
    id: 24,
    title: "Which block always executes after a try/catch?",
    options: [
      { id: 1, text: "finally" }, // correct
      { id: 2, text: "ensure" },
      { id: 3, text: "always" },
      { id: 4, text: "default" }
    ]
  },
  {
    id: 25,
    title: "Which keyword manually raises an exception?",
    options: [
      { id: 1, text: "raise" },
      { id: 2, text: "throw" }, // correct
      { id: 3, text: "error" },
      { id: 4, text: "catch" }
    ]
  },
  {
    id: 26,
    title: "What is the correct string interpolation syntax?",
    options: [
      { id: 1, text: "\"Hello {name}\"" },
      { id: 2, text: "$\"Hello {name}\"" }, // correct
      { id: 3, text: "@\"Hello {name}\"" },
      { id: 4, text: "f\"Hello {name}\"" }
    ]
  },
  {
    id: 27,
    title: "How do you make an int able to hold null?",
    options: [
      { id: 1, text: "int*" },
      { id: 2, text: "int?" }, // correct
      { id: 3, text: "nullable int" },
      { id: 4, text: "int.Null" }
    ]
  },
  {
    id: 28,
    title: "What does the 'var' keyword do?",
    options: [
      { id: 1, text: "Declares a dynamic variable" },
      { id: 2, text: "Lets the compiler infer the variable's type" }, // correct
      { id: 3, text: "Creates a global variable" },
      { id: 4, text: "Declares a constant" }
    ]
  },
  {
    id: 29,
    title: "Which operator is the null-coalescing operator?",
    options: [
      { id: 1, text: "??" }, // correct
      { id: 2, text: "?." },
      { id: 3, text: "?:" },
      { id: 4, text: "==" }
    ]
  },
  {
    id: 30,
    title: "Which operator safely accesses a member only if the object is not null?",
    options: [
      { id: 1, text: "??" },
      { id: 2, text: "?." }, // correct
      { id: 3, text: "->" },
      { id: 4, text: "!." }
    ]
  },
  {
    id: 31,
    title: "What is a property in C#?",
    options: [
      { id: 1, text: "A member that exposes get/set access to data" }, // correct
      { id: 2, text: "A static field" },
      { id: 3, text: "A type of loop" },
      { id: 4, text: "A namespace" }
    ]
  },
  {
    id: 32,
    title: "Which is a valid auto-implemented property?",
    options: [
      { id: 1, text: "public int Age;" },
      { id: 2, text: "public int Age { get; set; }" }, // correct
      { id: 3, text: "int Age => return;" },
      { id: 4, text: "property int Age;" }
    ]
  },
  {
    id: 33,
    title: "What is an interface?",
    options: [
      { id: 1, text: "A contract specifying members a type must implement" }, // correct
      { id: 2, text: "A concrete class" },
      { id: 3, text: "A value type" },
      { id: 4, text: "A namespace alias" }
    ]
  },
  {
    id: 34,
    title: "How many interfaces can a single class implement?",
    options: [
      { id: 1, text: "Only one" },
      { id: 2, text: "At most two" },
      { id: 3, text: "Multiple" }, // correct
      { id: 4, text: "None" }
    ]
  },
  {
    id: 35,
    title: "What is an enum?",
    options: [
      { id: 1, text: "A distinct type consisting of named constants" }, // correct
      { id: 2, text: "A dynamic list" },
      { id: 3, text: "A reference type for strings" },
      { id: 4, text: "A type of exception" }
    ]
  },
  {
    id: 36,
    title: "What is a struct in C#?",
    options: [
      { id: 1, text: "A reference type" },
      { id: 2, text: "A value type that can contain data and methods" }, // correct
      { id: 3, text: "A type of interface" },
      { id: 4, text: "A built-in collection" }
    ]
  },
  {
    id: 37,
    title: "What does 'readonly' allow for a field?",
    options: [
      { id: 1, text: "Assignment only at declaration or in a constructor" }, // correct
      { id: 2, text: "Assignment anywhere at any time" },
      { id: 3, text: "It makes the field static" },
      { id: 4, text: "It makes the field public" }
    ]
  },
  {
    id: 38,
    title: "What is boxing?",
    options: [
      { id: 1, text: "Converting a value type to an object (reference type)" }, // correct
      { id: 2, text: "Encrypting data" },
      { id: 3, text: "Wrapping a method in a try block" },
      { id: 4, text: "Casting object to int" }
    ]
  },
  {
    id: 39,
    title: "What is a namespace used for?",
    options: [
      { id: 1, text: "Organizing and grouping related types" }, // correct
      { id: 2, text: "Allocating memory" },
      { id: 3, text: "Defining a database schema" },
      { id: 4, text: "Handling exceptions" }
    ]
  },
  {
    id: 40,
    title: "Which keyword imports a namespace?",
    options: [
      { id: 1, text: "import" },
      { id: 2, text: "include" },
      { id: 3, text: "using" }, // correct
      { id: 4, text: "require" }
    ]
  },
  {
    id: 41,
    title: "What is method overloading?",
    options: [
      { id: 1, text: "Multiple methods with the same name but different parameters" }, // correct
      { id: 2, text: "Overriding a base method" },
      { id: 3, text: "Calling a method too many times" },
      { id: 4, text: "A method that returns void" }
    ]
  },
  {
    id: 42,
    title: "What does the 'params' keyword allow?",
    options: [
      { id: 1, text: "Passing a variable number of arguments" }, // correct
      { id: 2, text: "Making a parameter optional only" },
      { id: 3, text: "Passing by reference" },
      { id: 4, text: "Returning multiple values" }
    ]
  },
  {
    id: 43,
    title: "What does a 'ref' parameter do?",
    options: [
      { id: 1, text: "Passes the argument by reference" }, // correct
      { id: 2, text: "Makes the argument readonly" },
      { id: 3, text: "Boxes the argument" },
      { id: 4, text: "Creates a copy of the argument" }
    ]
  },
  {
    id: 44,
    title: "What is required of an 'out' parameter?",
    options: [
      { id: 1, text: "It must be assigned before the method returns" }, // correct
      { id: 2, text: "It must be initialized by the caller first" },
      { id: 3, text: "It cannot be changed" },
      { id: 4, text: "It must be a reference type" }
    ]
  },
  {
    id: 45,
    title: "Which LINQ method filters a sequence by a condition?",
    options: [
      { id: 1, text: "Select" },
      { id: 2, text: "Where" }, // correct
      { id: 3, text: "OrderBy" },
      { id: 4, text: "Aggregate" }
    ]
  },
  {
    id: 46,
    title: "Which LINQ method projects/transforms each element?",
    options: [
      { id: 1, text: "Where" },
      { id: 2, text: "Select" }, // correct
      { id: 3, text: "Count" },
      { id: 4, text: "First" }
    ]
  },
  {
    id: 47,
    title: "What can 'foreach' iterate over?",
    options: [
      { id: 1, text: "Any type implementing IEnumerable" }, // correct
      { id: 2, text: "Only arrays" },
      { id: 3, text: "Only List<T>" },
      { id: 4, text: "Only integers" }
    ]
  },
  {
    id: 48,
    title: "What is a constructor?",
    options: [
      { id: 1, text: "A special method that initializes a new object" }, // correct
      { id: 2, text: "A method that destroys an object" },
      { id: 3, text: "A static utility method" },
      { id: 4, text: "A property accessor" }
    ]
  },

  // ---------- Multi-option (49-60) ----------
  {
    id: 49,
    title: "Which of the following are value types in C#?",
    isMultiOption: true,
    options: [
      { id: 1, text: "int" }, // correct
      { id: 2, text: "object" },
      { id: 3, text: "an interface" },
      { id: 4, text: "string" }
    ]
  },
  {
    id: 50,
    title: "Which of the following are reference types in C#?",
    isMultiOption: true,
    options: [
      { id: 1, text: "string" }, // correct
      { id: 2, text: "class instances" }, // correct
      { id: 3, text: "arrays" }, // correct
      { id: 4, text: "int" }
    ]
  },
  {
    id: 51,
    title: "Which of these are valid C# access modifiers?",
    isMultiOption: true,
    options: [
      { id: 1, text: "public" }, // correct
      { id: 2, text: "private" }, // correct
      { id: 3, text: "global" },
      { id: 4, text: "external" }
    ]
  },
  {
    id: 52,
    title: "Which of these are loop constructs in C#?",
    isMultiOption: true,
    options: [
      { id: 1, text: "for" }, // correct
      { id: 2, text: "while" }, // correct
      { id: 3, text: "do-while" }, // correct
      { id: 4, text: "repeat-until" }
    ]
  },
  {
    id: 53,
    title: "Which of these are pillars of object-oriented programming?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Encapsulation" }, // correct
      { id: 2, text: "Inheritance" }, // correct
      { id: 3, text: "Polymorphism" }, // correct
      { id: 4, text: "Compilation" }
    ]
  },
  {
    id: 54,
    title: "Which of these are built-in .NET collection types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "List<T>" }, // correct
      { id: 2, text: "Dictionary<TKey, TValue>" }, // correct
      { id: 3, text: "DataFrame<T>" },
      { id: 4, text: "LinkedArray<T>" }
    ]
  },
  {
    id: 55,
    title: "Which of these are built-in C# value/primitive types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "int" }, // correct
      { id: 2, text: "double" }, // correct
      { id: 3, text: "char" }, // correct
      { id: 4, text: "varchar" }
    ]
  },
  {
    id: 56,
    title: "Which keywords relate to exception handling?",
    isMultiOption: true,
    options: [
      { id: 1, text: "try" }, // correct
      { id: 2, text: "catch" }, // correct
      { id: 3, text: "finally" }, // correct
      { id: 4, text: "rescue" }
    ]
  },
  {
    id: 57,
    title: "Which of these are standard LINQ query operators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Where" }, // correct
      { id: 2, text: "Select" }, // correct
      { id: 3, text: "OrderBy" }, // correct
      { id: 4, text: "MapReduce" }
    ]
  },
  {
    id: 58,
    title: "Which statements about interfaces are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They define a contract" }, // correct
      { id: 2, text: "They can be implemented by multiple classes" }, // correct
      { id: 3, text: "They cannot be instantiated directly" }, // correct
      { id: 4, text: "They store mutable instance fields with values" }
    ]
  },
  {
    id: 59,
    title: "Which are valid ways to deal with null in C#?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The ?? null-coalescing operator" }, // correct
      { id: 2, text: "The ?. null-conditional operator" }, // correct
      { id: 3, text: "Nullable types (int?)" }, // correct
      { id: 4, text: "Calling delete on the variable" }
    ]
  },
  {
    id: 60,
    title: "Which statements about 'static' members are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They belong to the type, not an instance" }, // correct
      { id: 2, text: "They are shared across all instances" }, // correct
      { id: 3, text: "They are accessed via the type name" }, // correct
      { id: 4, text: "They are recreated for every instance" }
    ]
  }
];

export const csharpBeginnerAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [2] },
  { questionId: 3, correctOptionIds: [3] },
  { questionId: 4, correctOptionIds: [1] },
  { questionId: 5, correctOptionIds: [3] },
  { questionId: 6, correctOptionIds: [3] },
  { questionId: 7, correctOptionIds: [1] },
  { questionId: 8, correctOptionIds: [2] },
  { questionId: 9, correctOptionIds: [3] },
  { questionId: 10, correctOptionIds: [2] },
  { questionId: 11, correctOptionIds: [3] },
  { questionId: 12, correctOptionIds: [2] },
  { questionId: 13, correctOptionIds: [2] },
  { questionId: 14, correctOptionIds: [3] },
  { questionId: 15, correctOptionIds: [1] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [1] },
  { questionId: 18, correctOptionIds: [2] },
  { questionId: 19, correctOptionIds: [3] },
  { questionId: 20, correctOptionIds: [3] },
  { questionId: 21, correctOptionIds: [2] },
  { questionId: 22, correctOptionIds: [3] },
  { questionId: 23, correctOptionIds: [2] },
  { questionId: 24, correctOptionIds: [1] },
  { questionId: 25, correctOptionIds: [2] },
  { questionId: 26, correctOptionIds: [2] },
  { questionId: 27, correctOptionIds: [2] },
  { questionId: 28, correctOptionIds: [2] },
  { questionId: 29, correctOptionIds: [1] },
  { questionId: 30, correctOptionIds: [2] },
  { questionId: 31, correctOptionIds: [1] },
  { questionId: 32, correctOptionIds: [2] },
  { questionId: 33, correctOptionIds: [1] },
  { questionId: 34, correctOptionIds: [3] },
  { questionId: 35, correctOptionIds: [1] },
  { questionId: 36, correctOptionIds: [2] },
  { questionId: 37, correctOptionIds: [1] },
  { questionId: 38, correctOptionIds: [1] },
  { questionId: 39, correctOptionIds: [1] },
  { questionId: 40, correctOptionIds: [3] },
  { questionId: 41, correctOptionIds: [1] },
  { questionId: 42, correctOptionIds: [1] },
  { questionId: 43, correctOptionIds: [1] },
  { questionId: 44, correctOptionIds: [1] },
  { questionId: 45, correctOptionIds: [2] },
  { questionId: 46, correctOptionIds: [2] },
  { questionId: 47, correctOptionIds: [1] },
  { questionId: 48, correctOptionIds: [1] },
  { questionId: 49, correctOptionIds: [1] },
  { questionId: 50, correctOptionIds: [1, 2, 3] },
  { questionId: 51, correctOptionIds: [1, 2] },
  { questionId: 52, correctOptionIds: [1, 2, 3] },
  { questionId: 53, correctOptionIds: [1, 2, 3] },
  { questionId: 54, correctOptionIds: [1, 2] },
  { questionId: 55, correctOptionIds: [1, 2, 3] },
  { questionId: 56, correctOptionIds: [1, 2, 3] },
  { questionId: 57, correctOptionIds: [1, 2, 3] },
  { questionId: 58, correctOptionIds: [1, 2, 3] },
  { questionId: 59, correctOptionIds: [1, 2, 3] },
  { questionId: 60, correctOptionIds: [1, 2, 3] }
];

const csharpBeginnerQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...csharpBeginnerQuestions]));
csharpBeginnerQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const csharpBeginnersExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal("csharp-100"),
  title: signal("C# — Beginner & Intermediate Level"),
  duration: signal({ hour: 1, minute: 0, second: 0 }),
  questions: csharpBeginnerQuestionsSignal,
};

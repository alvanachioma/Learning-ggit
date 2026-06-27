import {QuizQuestion, AnswerKey, ExamSubject} from './exam-question-services';
import {signal} from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// C# — Advanced (Software Engineer Level)
// 60 questions (48 single-answer, 12 multi-option). isMultiOption: true marks
// multi-select questions. Correct option(s) are tagged with "// correct".
// See csharpAdvancedAnswers for the answer key.
// ============================================================================
export const csharpAdvancedQuestions: QuizQuestion[] = [
  // ---------- Single-answer (1-48) ----------
  {
    id: 1,
    title: "What does the 'async' modifier enable a method to do?",
    options: [
      { id: 1, text: "Run on the GPU" },
      { id: 2, text: "Use 'await' and run asynchronously without blocking the thread" }, // correct
      { id: 3, text: "Become thread-safe automatically" },
      { id: 4, text: "Run only once" }
    ]
  },
  {
    id: 2,
    title: "What does 'await' do?",
    options: [
      { id: 1, text: "Blocks the thread until completion" },
      { id: 2, text: "Asynchronously waits for a task, releasing the thread until it completes" }, // correct
      { id: 3, text: "Cancels the task" },
      { id: 4, text: "Starts a new process" }
    ]
  },
  {
    id: 3,
    title: "Which type represents an asynchronous operation returning a value?",
    options: [
      { id: 1, text: "Task<T>" }, // correct
      { id: 2, text: "Action" },
      { id: 3, text: "IEnumerable<T>" },
      { id: 4, text: "Thread" }
    ]
  },
  {
    id: 4,
    title: "What is the primary purpose of IDisposable?",
    options: [
      { id: 1, text: "To serialize objects" },
      { id: 2, text: "To compare objects" },
      { id: 3, text: "To release unmanaged resources via Dispose()" }, // correct
      { id: 4, text: "To clone objects" }
    ]
  },
  {
    id: 5,
    title: "Which statement guarantees Dispose() is called deterministically?",
    options: [
      { id: 1, text: "lock" },
      { id: 2, text: "using" }, // correct
      { id: 3, text: "checked" },
      { id: 4, text: "fixed" }
    ]
  },
  {
    id: 6,
    title: "What characterizes a 'record' type?",
    options: [
      { id: 1, text: "Reference equality only" },
      { id: 2, text: "It is always a struct" },
      { id: 3, text: "Value-based equality with concise syntax" }, // correct
      { id: 4, text: "It cannot have properties" }
    ]
  },
  {
    id: 7,
    title: "What does 'yield return' do inside an iterator?",
    options: [
      { id: 1, text: "Returns all elements at once" },
      { id: 2, text: "Lazily produces one element of the sequence at a time" }, // correct
      { id: 3, text: "Throws an exception" },
      { id: 4, text: "Ends the program" }
    ]
  },
  {
    id: 8,
    title: "Which interface supports in-memory LINQ with deferred execution?",
    options: [
      { id: 1, text: "IQueryable<T>" },
      { id: 2, text: "IComparable<T>" },
      { id: 3, text: "IEnumerable<T>" }, // correct
      { id: 4, text: "IDisposable" }
    ]
  },
  {
    id: 9,
    title: "Which interface lets a provider translate queries to another source (e.g., SQL)?",
    options: [
      { id: 1, text: "IEnumerable<T>" },
      { id: 2, text: "IQueryable<T>" }, // correct
      { id: 3, text: "IList<T>" },
      { id: 4, text: "ICollection<T>" }
    ]
  },
  {
    id: 10,
    title: "What is deferred execution in LINQ?",
    options: [
      { id: 1, text: "The query runs only when the results are enumerated" }, // correct
      { id: 2, text: "The query runs immediately when defined" },
      { id: 3, text: "The query never runs" },
      { id: 4, text: "The query runs on a background thread automatically" }
    ]
  },
  {
    id: 11,
    title: "What is a delegate?",
    options: [
      { id: 1, text: "A type-safe reference to a method" }, // correct
      { id: 2, text: "A type of exception" },
      { id: 3, text: "A collection type" },
      { id: 4, text: "A namespace" }
    ]
  },
  {
    id: 12,
    title: "Which built-in delegate returns a value?",
    options: [
      { id: 1, text: "Action" },
      { id: 2, text: "Func" }, // correct
      { id: 3, text: "EventHandler" },
      { id: 4, text: "void" }
    ]
  },
  {
    id: 13,
    title: "Which built-in delegate returns void?",
    options: [
      { id: 1, text: "Func" },
      { id: 2, text: "Predicate" },
      { id: 3, text: "Action" }, // correct
      { id: 4, text: "Comparison" }
    ]
  },
  {
    id: 14,
    title: "Which built-in delegate represents a boolean predicate?",
    options: [
      { id: 1, text: "Predicate<T>" }, // correct
      { id: 2, text: "Action<T>" },
      { id: 3, text: "Converter<T>" },
      { id: 4, text: "Func<T>" }
    ]
  },
  {
    id: 15,
    title: "What is a lambda expression?",
    options: [
      { id: 1, text: "A named static method" },
      { id: 2, text: "An anonymous inline function" }, // correct
      { id: 3, text: "A type constraint" },
      { id: 4, text: "An attribute" }
    ]
  },
  {
    id: 16,
    title: "What is a closure?",
    options: [
      { id: 1, text: "A sealed class" },
      { id: 2, text: "A function that captures variables from its enclosing scope" }, // correct
      { id: 3, text: "A disposed object" },
      { id: 4, text: "A finalized resource" }
    ]
  },
  {
    id: 17,
    title: "What defines an extension method?",
    options: [
      { id: 1, text: "A static method whose first parameter uses 'this' to extend a type" }, // correct
      { id: 2, text: "An overridden virtual method" },
      { id: 3, text: "A method inside an interface" },
      { id: 4, text: "A constructor" }
    ]
  },
  {
    id: 18,
    title: "What is reflection used for?",
    options: [
      { id: 1, text: "Compiling code faster" },
      { id: 2, text: "Inspecting type metadata and invoking members at runtime" }, // correct
      { id: 3, text: "Encrypting assemblies" },
      { id: 4, text: "Managing memory" }
    ]
  },
  {
    id: 19,
    title: "What are attributes used for in C#?",
    options: [
      { id: 1, text: "Attaching declarative metadata to code elements" }, // correct
      { id: 2, text: "Allocating memory" },
      { id: 3, text: "Defining loops" },
      { id: 4, text: "Throwing exceptions" }
    ]
  },
  {
    id: 20,
    title: "What does covariance ('out') allow in generic interfaces?",
    options: [
      { id: 1, text: "Using a more derived type than originally specified" }, // correct
      { id: 2, text: "Using a more generic base type" },
      { id: 3, text: "Mutating the type parameter" },
      { id: 4, text: "Boxing the type parameter" }
    ]
  },
  {
    id: 21,
    title: "What does contravariance ('in') allow?",
    options: [
      { id: 1, text: "Using a more derived type" },
      { id: 2, text: "Using a more generic (base) type than specified" }, // correct
      { id: 3, text: "Removing the type parameter" },
      { id: 4, text: "Sealing the interface" }
    ]
  },
  {
    id: 22,
    title: "Which constraint restricts a generic type to a reference type?",
    options: [
      { id: 1, text: "where T : struct" },
      { id: 2, text: "where T : new()" },
      { id: 3, text: "where T : class" }, // correct
      { id: 4, text: "where T : unmanaged" }
    ]
  },
  {
    id: 23,
    title: "What is the garbage collector responsible for?",
    options: [
      { id: 1, text: "Automatically reclaiming unused managed memory" }, // correct
      { id: 2, text: "Freeing unmanaged file handles automatically" },
      { id: 3, text: "Compiling IL to native code" },
      { id: 4, text: "Scheduling threads" }
    ]
  },
  {
    id: 24,
    title: "How many generations does the .NET GC primarily use?",
    options: [
      { id: 1, text: "One" },
      { id: 2, text: "Two" },
      { id: 3, text: "Three (0, 1, 2)" }, // correct
      { id: 4, text: "Five" }
    ]
  },
  {
    id: 25,
    title: "What is a finalizer?",
    options: [
      { id: 1, text: "A constructor that runs last" },
      { id: 2, text: "A method invoked by the GC before reclaiming an object" }, // correct
      { id: 3, text: "A static initializer" },
      { id: 4, text: "A disposal interface" }
    ]
  },
  {
    id: 26,
    title: "What is Span<T>?",
    options: [
      { id: 1, text: "A stack-only view over contiguous memory that avoids allocation" }, // correct
      { id: 2, text: "A dynamically resizable list" },
      { id: 3, text: "A thread-safe queue" },
      { id: 4, text: "A serialization format" }
    ]
  },
  {
    id: 27,
    title: "What is special about a 'ref struct'?",
    options: [
      { id: 1, text: "It can only live on the stack" }, // correct
      { id: 2, text: "It is always boxed" },
      { id: 3, text: "It is a reference type" },
      { id: 4, text: "It cannot have fields" }
    ]
  },
  {
    id: 28,
    title: "What does 'stackalloc' do?",
    options: [
      { id: 1, text: "Allocates a block of memory on the stack" }, // correct
      { id: 2, text: "Allocates on the managed heap" },
      { id: 3, text: "Starts a new thread" },
      { id: 4, text: "Triggers garbage collection" }
    ]
  },
  {
    id: 29,
    title: "What does the 'lock' statement provide?",
    options: [
      { id: 1, text: "Mutual exclusion for a critical section" }, // correct
      { id: 2, text: "Asynchronous waiting" },
      { id: 3, text: "Memory allocation" },
      { id: 4, text: "Serialization" }
    ]
  },
  {
    id: 30,
    title: "Which problem does proper locking help prevent?",
    options: [
      { id: 1, text: "Compilation errors" },
      { id: 2, text: "Race conditions" }, // correct
      { id: 3, text: "Boxing" },
      { id: 4, text: "Stack overflow" }
    ]
  },
  {
    id: 31,
    title: "What is the Task Parallel Library (TPL)?",
    options: [
      { id: 1, text: "A UI framework" },
      { id: 2, text: "A set of APIs for parallel and concurrent programming" }, // correct
      { id: 3, text: "A logging library" },
      { id: 4, text: "An ORM" }
    ]
  },
  {
    id: 32,
    title: "What does Task.WhenAll return?",
    options: [
      { id: 1, text: "The first completed task" },
      { id: 2, text: "A task that completes when all supplied tasks complete" }, // correct
      { id: 3, text: "A cancelled task" },
      { id: 4, text: "A synchronous result" }
    ]
  },
  {
    id: 33,
    title: "What does ConfigureAwait(false) do?",
    options: [
      { id: 1, text: "Cancels the awaited task" },
      { id: 2, text: "Avoids capturing the original synchronization context on resume" }, // correct
      { id: 3, text: "Forces synchronous execution" },
      { id: 4, text: "Retries on failure" }
    ]
  },
  {
    id: 34,
    title: "What is IAsyncEnumerable<T> used for?",
    options: [
      { id: 1, text: "Synchronous iteration only" },
      { id: 2, text: "Asynchronous streaming with 'await foreach'" }, // correct
      { id: 3, text: "Parallel sorting" },
      { id: 4, text: "Dependency injection" }
    ]
  },
  {
    id: 35,
    title: "What does a 'switch' expression provide?",
    options: [
      { id: 1, text: "Concise branching based on a value's shape or type" }, // correct
      { id: 2, text: "A loop construct" },
      { id: 3, text: "Exception handling" },
      { id: 4, text: "Thread synchronization" }
    ]
  },
  {
    id: 36,
    title: "What does the 'is' pattern do?",
    options: [
      { id: 1, text: "Tests a type and optionally binds a variable" }, // correct
      { id: 2, text: "Compares two integers only" },
      { id: 3, text: "Casts without checking" },
      { id: 4, text: "Allocates memory" }
    ]
  },
  {
    id: 37,
    title: "What is an 'init' accessor?",
    options: [
      { id: 1, text: "A setter usable only during object initialization" }, // correct
      { id: 2, text: "A static constructor" },
      { id: 3, text: "A getter that caches" },
      { id: 4, text: "A finalizer" }
    ]
  },
  {
    id: 38,
    title: "What are tuples primarily used for?",
    options: [
      { id: 1, text: "Grouping multiple values without a dedicated type" }, // correct
      { id: 2, text: "Thread synchronization" },
      { id: 3, text: "Memory pooling" },
      { id: 4, text: "Reflection" }
    ]
  },
  {
    id: 39,
    title: "What is deconstruction?",
    options: [
      { id: 1, text: "Splitting a tuple or object into separate variables" }, // correct
      { id: 2, text: "Destroying an object immediately" },
      { id: 3, text: "Garbage collecting early" },
      { id: 4, text: "Reversing a string" }
    ]
  },
  {
    id: 40,
    title: "What does the 'dynamic' type do?",
    options: [
      { id: 1, text: "Bypasses compile-time checking; resolved at runtime" }, // correct
      { id: 2, text: "Forces stricter type checks" },
      { id: 3, text: "Makes a type immutable" },
      { id: 4, text: "Allocates on the stack" }
    ]
  },
  {
    id: 41,
    title: "Compared to a class, how is a struct typically stored?",
    options: [
      { id: 1, text: "As a value type, often inline or on the stack" }, // correct
      { id: 2, text: "Always on the managed heap with a header" },
      { id: 3, text: "In unmanaged memory only" },
      { id: 4, text: "In a separate process" }
    ]
  },
  {
    id: 42,
    title: "What does the 'nameof' operator return?",
    options: [
      { id: 1, text: "The string name of a variable, type, or member" }, // correct
      { id: 2, text: "The runtime type" },
      { id: 3, text: "The memory address" },
      { id: 4, text: "The hash code" }
    ]
  },
  {
    id: 43,
    title: "What does a default interface method allow?",
    options: [
      { id: 1, text: "Providing an implementation body inside an interface member" }, // correct
      { id: 2, text: "Sealing the interface" },
      { id: 3, text: "Adding fields to interfaces" },
      { id: 4, text: "Boxing the interface" }
    ]
  },
  {
    id: 44,
    title: "What is the 'volatile' keyword used for?",
    options: [
      { id: 1, text: "Signaling a field may be accessed by multiple threads, limiting optimizations" }, // correct
      { id: 2, text: "Making a field constant" },
      { id: 3, text: "Allocating on the stack" },
      { id: 4, text: "Serializing a field" }
    ]
  },
  {
    id: 45,
    title: "What does the Interlocked class provide?",
    options: [
      { id: 1, text: "Atomic operations on shared variables" }, // correct
      { id: 2, text: "Asynchronous streams" },
      { id: 3, text: "Reflection helpers" },
      { id: 4, text: "JSON parsing" }
    ]
  },
  {
    id: 46,
    title: "What is the purpose of a CancellationToken?",
    options: [
      { id: 1, text: "Cooperative cancellation of async or long-running work" }, // correct
      { id: 2, text: "Throttling memory usage" },
      { id: 3, text: "Encrypting data" },
      { id: 4, text: "Logging exceptions" }
    ]
  },
  {
    id: 47,
    title: "What is dependency injection?",
    options: [
      { id: 1, text: "Supplying a class's dependencies from the outside" }, // correct
      { id: 2, text: "Creating all dependencies inside the class with 'new'" },
      { id: 3, text: "Injecting SQL into a query" },
      { id: 4, text: "Reflecting over assemblies" }
    ]
  },
  {
    id: 48,
    title: "How do Equals and ReferenceEquals differ?",
    options: [
      { id: 1, text: "ReferenceEquals checks identity; Equals can check value equality" }, // correct
      { id: 2, text: "They are identical" },
      { id: 3, text: "Equals always checks identity only" },
      { id: 4, text: "ReferenceEquals compares hash codes" }
    ]
  },

  // ---------- Multi-option (49-60) ----------
  {
    id: 49,
    title: "Which of the following are async-related types or keywords?",
    isMultiOption: true,
    options: [
      { id: 1, text: "async" }, // correct
      { id: 2, text: "Promise" },
      { id: 3, text: "Coroutine" },
      { id: 4, text: "ParallelStream" }
    ]
  },
  {
    id: 50,
    title: "Which of these are built-in delegate types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Func<>" }, // correct
      { id: 2, text: "Action<>" }, // correct
      { id: 3, text: "Predicate<>" }, // correct
      { id: 4, text: "Callback<>" }
    ]
  },
  {
    id: 51,
    title: "Which statements describe the .NET garbage collector?",
    isMultiOption: true,
    options: [
      { id: 1, text: "It reclaims unused managed memory" }, // correct
      { id: 2, text: "It uses generations (0, 1, 2)" }, // correct
      { id: 3, text: "It manually frees every object instantly" },
      { id: 4, text: "It compiles IL to machine code" }
    ]
  },
  {
    id: 52,
    title: "Which statements about records are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They provide value-based equality" }, // correct
      { id: 2, text: "They have concise positional syntax" }, // correct
      { id: 3, text: "They support non-destructive 'with' copies" }, // correct
      { id: 4, text: "They cannot contain any properties" }
    ]
  },
  {
    id: 53,
    title: "Which of these support concurrency/synchronization?",
    isMultiOption: true,
    options: [
      { id: 1, text: "lock / Monitor" }, // correct
      { id: 2, text: "SemaphoreSlim" }, // correct
      { id: 3, text: "Console.WriteLine" },
      { id: 4, text: "StringBuilder" }
    ]
  },
  {
    id: 54,
    title: "Which of these are forms of pattern matching?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Type patterns" }, // correct
      { id: 2, text: "Property patterns" }, // correct
      { id: 3, text: "Relational patterns" }, // correct
      { id: 4, text: "for-loops" }
    ]
  },
  {
    id: 55,
    title: "Which statements about Span<T>/Memory<T> are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They can reduce allocations" }, // correct
      { id: 2, text: "Span<T> is stack-only" }, // correct
      { id: 3, text: "They provide a view over contiguous memory" }, // correct
      { id: 4, text: "They always allocate on the managed heap" }
    ]
  },
  {
    id: 56,
    title: "Which of these are valid generic type constraints?",
    isMultiOption: true,
    options: [
      { id: 1, text: "where T : class" }, // correct
      { id: 2, text: "where T : struct" }, // correct
      { id: 3, text: "where T : new()" }, // correct
      { id: 4, text: "where T : voidable" }
    ]
  },
  {
    id: 57,
    title: "Which statements about IEnumerable vs IQueryable are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "IEnumerable executes in memory" }, // correct
      { id: 2, text: "IQueryable can translate to SQL" }, // correct
      { id: 3, text: "Both support deferred execution" }, // correct
      { id: 4, text: "IEnumerable always executes on the database server" }
    ]
  },
  {
    id: 58,
    title: "Which features support immutability in C#?",
    isMultiOption: true,
    options: [
      { id: 1, text: "readonly fields" }, // correct
      { id: 2, text: "init-only accessors" }, // correct
      { id: 3, text: "records" }, // correct
      { id: 4, text: "The volatile keyword" }
    ]
  },
  {
    id: 59,
    title: "Which are good exception-handling practices?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Catch specific exception types" }, // correct
      { id: 2, text: "Avoid silently swallowing exceptions" }, // correct
      { id: 3, text: "Use 'throw;' to preserve the stack trace" }, // correct
      { id: 4, text: "Catch Exception and silently ignore it" }
    ]
  },
  {
    id: 60,
    title: "Which techniques can improve performance / reduce allocations?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Span<T> / stackalloc" }, // correct
      { id: 2, text: "ArrayPool<T>" }, // correct
      { id: 3, text: "Using structs for small, short-lived data" }, // correct
      { id: 4, text: "Boxing every value type in a loop" }
    ]
  }
];

export const csharpAdvancedAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [2] },
  { questionId: 2, correctOptionIds: [2] },
  { questionId: 3, correctOptionIds: [1] },
  { questionId: 4, correctOptionIds: [3] },
  { questionId: 5, correctOptionIds: [2] },
  { questionId: 6, correctOptionIds: [3] },
  { questionId: 7, correctOptionIds: [2] },
  { questionId: 8, correctOptionIds: [3] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [1] },
  { questionId: 11, correctOptionIds: [1] },
  { questionId: 12, correctOptionIds: [2] },
  { questionId: 13, correctOptionIds: [3] },
  { questionId: 14, correctOptionIds: [1] },
  { questionId: 15, correctOptionIds: [2] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [1] },
  { questionId: 18, correctOptionIds: [2] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [1] },
  { questionId: 21, correctOptionIds: [2] },
  { questionId: 22, correctOptionIds: [3] },
  { questionId: 23, correctOptionIds: [1] },
  { questionId: 24, correctOptionIds: [3] },
  { questionId: 25, correctOptionIds: [2] },
  { questionId: 26, correctOptionIds: [1] },
  { questionId: 27, correctOptionIds: [1] },
  { questionId: 28, correctOptionIds: [1] },
  { questionId: 29, correctOptionIds: [1] },
  { questionId: 30, correctOptionIds: [2] },
  { questionId: 31, correctOptionIds: [2] },
  { questionId: 32, correctOptionIds: [2] },
  { questionId: 33, correctOptionIds: [2] },
  { questionId: 34, correctOptionIds: [2] },
  { questionId: 35, correctOptionIds: [1] },
  { questionId: 36, correctOptionIds: [1] },
  { questionId: 37, correctOptionIds: [1] },
  { questionId: 38, correctOptionIds: [1] },
  { questionId: 39, correctOptionIds: [1] },
  { questionId: 40, correctOptionIds: [1] },
  { questionId: 41, correctOptionIds: [1] },
  { questionId: 42, correctOptionIds: [1] },
  { questionId: 43, correctOptionIds: [1] },
  { questionId: 44, correctOptionIds: [1] },
  { questionId: 45, correctOptionIds: [1] },
  { questionId: 46, correctOptionIds: [1] },
  { questionId: 47, correctOptionIds: [1] },
  { questionId: 48, correctOptionIds: [1] },
  { questionId: 49, correctOptionIds: [1] },
  { questionId: 50, correctOptionIds: [1, 2, 3] },
  { questionId: 51, correctOptionIds: [1, 2] },
  { questionId: 52, correctOptionIds: [1, 2, 3] },
  { questionId: 53, correctOptionIds: [1, 2] },
  { questionId: 54, correctOptionIds: [1, 2, 3] },
  { questionId: 55, correctOptionIds: [1, 2, 3] },
  { questionId: 56, correctOptionIds: [1, 2, 3] },
  { questionId: 57, correctOptionIds: [1, 2, 3] },
  { questionId: 58, correctOptionIds: [1, 2, 3] },
  { questionId: 59, correctOptionIds: [1, 2, 3] },
  { questionId: 60, correctOptionIds: [1, 2, 3] }
];

const csharpAdvancedQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...csharpAdvancedQuestions]));
csharpAdvancedQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const cSharpAdvanceExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal("csharp-300"),
  title: signal("C# — Advanced (Software Engineer Level)"),
  duration: signal({ hour: 1, minute: 20, second: 0 }),
  questions: csharpAdvancedQuestionsSignal,
};

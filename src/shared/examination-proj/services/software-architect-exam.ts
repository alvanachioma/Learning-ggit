import {QuizQuestion, AnswerKey, ExamSubject} from './exam-question-services';
import {signal} from '@angular/core';

// ============================================================================
// Software Architect Level
// 60 questions (48 single-answer, 12 multi-option). isMultiOption: true marks
// multi-select questions. Correct option(s) are tagged with "// correct".
// Covers SOLID, design patterns, architecture styles, DDD, scalability,
// resilience, messaging, APIs and observability.
// See architectAnswers for the answer key.
// ============================================================================
export const architectQuestions: QuizQuestion[] = [
  // ---------- Single-answer (1-48) ----------
  {
    id: 1,
    title: "What does the 'S' in SOLID stand for?",
    options: [
      { id: 1, text: "Single Responsibility Principle" }, // correct
      { id: 2, text: "Separation Principle" },
      { id: 3, text: "Stateless Principle" },
      { id: 4, text: "Scalability Principle" }
    ]
  },
  {
    id: 2,
    title: "What does the 'O' in SOLID stand for?",
    options: [
      { id: 1, text: "Object Principle" },
      { id: 2, text: "Open/Closed Principle" }, // correct
      { id: 3, text: "Orchestration Principle" },
      { id: 4, text: "Observer Principle" }
    ]
  },
  {
    id: 3,
    title: "What does the 'L' in SOLID stand for?",
    options: [
      { id: 1, text: "Layering Principle" },
      { id: 2, text: "Loose Coupling Principle" },
      { id: 3, text: "Liskov Substitution Principle" }, // correct
      { id: 4, text: "Lazy Loading Principle" }
    ]
  },
  {
    id: 4,
    title: "What does the 'I' in SOLID stand for?",
    options: [
      { id: 1, text: "Inversion Principle" },
      { id: 2, text: "Isolation Principle" },
      { id: 3, text: "Injection Principle" },
      { id: 4, text: "Interface Segregation Principle" } // correct
    ]
  },
  {
    id: 5,
    title: "What does the 'D' in SOLID stand for?",
    options: [
      { id: 1, text: "Dependency Inversion Principle" }, // correct
      { id: 2, text: "Decoupling Principle" },
      { id: 3, text: "Domain Principle" },
      { id: 4, text: "Delegation Principle" }
    ]
  },
  {
    id: 6,
    title: "Which pattern ensures a class has only one instance?",
    options: [
      { id: 1, text: "Factory" },
      { id: 2, text: "Singleton" }, // correct
      { id: 3, text: "Prototype" },
      { id: 4, text: "Builder" }
    ]
  },
  {
    id: 7,
    title: "Which pattern creates objects without specifying the exact concrete class?",
    options: [
      { id: 1, text: "Factory Method" }, // correct
      { id: 2, text: "Observer" },
      { id: 3, text: "Decorator" },
      { id: 4, text: "Proxy" }
    ]
  },
  {
    id: 8,
    title: "Which pattern constructs a complex object step by step?",
    options: [
      { id: 1, text: "Adapter" },
      { id: 2, text: "Strategy" },
      { id: 3, text: "Builder" }, // correct
      { id: 4, text: "Facade" }
    ]
  },
  {
    id: 9,
    title: "Which pattern provides a simplified interface to a complex subsystem?",
    options: [
      { id: 1, text: "Proxy" },
      { id: 2, text: "Facade" }, // correct
      { id: 3, text: "Command" },
      { id: 4, text: "Mediator" }
    ]
  },
  {
    id: 10,
    title: "Which pattern attaches additional behavior to an object dynamically?",
    options: [
      { id: 1, text: "Decorator" }, // correct
      { id: 2, text: "Singleton" },
      { id: 3, text: "Builder" },
      { id: 4, text: "Adapter" }
    ]
  },
  {
    id: 11,
    title: "Which pattern defines a one-to-many notification dependency?",
    options: [
      { id: 1, text: "Strategy" },
      { id: 2, text: "Observer" }, // correct
      { id: 3, text: "Proxy" },
      { id: 4, text: "Factory" }
    ]
  },
  {
    id: 12,
    title: "Which pattern encapsulates interchangeable algorithms behind a common interface?",
    options: [
      { id: 1, text: "Strategy" }, // correct
      { id: 2, text: "Observer" },
      { id: 3, text: "Decorator" },
      { id: 4, text: "Composite" }
    ]
  },
  {
    id: 13,
    title: "Which pattern encapsulates a request as an object?",
    options: [
      { id: 1, text: "Mediator" },
      { id: 2, text: "Command" }, // correct
      { id: 3, text: "State" },
      { id: 4, text: "Visitor" }
    ]
  },
  {
    id: 14,
    title: "Which pattern provides a surrogate or placeholder for another object?",
    options: [
      { id: 1, text: "Facade" },
      { id: 2, text: "Adapter" },
      { id: 3, text: "Proxy" }, // correct
      { id: 4, text: "Bridge" }
    ]
  },
  {
    id: 15,
    title: "Which pattern converts one interface into another clients expect?",
    options: [
      { id: 1, text: "Adapter" }, // correct
      { id: 2, text: "Decorator" },
      { id: 3, text: "Observer" },
      { id: 4, text: "Singleton" }
    ]
  },
  {
    id: 16,
    title: "Which style structures an application as small, independently deployable services?",
    options: [
      { id: 1, text: "Monolith" },
      { id: 2, text: "Microservices" }, // correct
      { id: 3, text: "Mainframe" },
      { id: 4, text: "Two-tier" }
    ]
  },
  {
    id: 17,
    title: "What best describes a monolithic architecture?",
    options: [
      { id: 1, text: "A single deployable unit containing all functionality" }, // correct
      { id: 2, text: "Many independently deployed services" },
      { id: 3, text: "A serverless function set" },
      { id: 4, text: "A peer-to-peer network" }
    ]
  },
  {
    id: 18,
    title: "What does layered (n-tier) architecture primarily do?",
    options: [
      { id: 1, text: "Separates concerns into layers (presentation, business, data)" }, // correct
      { id: 2, text: "Eliminates all dependencies" },
      { id: 3, text: "Forces a single class design" },
      { id: 4, text: "Replaces the database" }
    ]
  },
  {
    id: 19,
    title: "What is the core idea of Hexagonal (Ports & Adapters) architecture?",
    options: [
      { id: 1, text: "Isolating the domain from external concerns via ports and adapters" }, // correct
      { id: 2, text: "Using exactly six layers" },
      { id: 3, text: "Storing data in hexagonal tables" },
      { id: 4, text: "Running on six servers" }
    ]
  },
  {
    id: 20,
    title: "What does Clean Architecture emphasize about dependencies?",
    options: [
      { id: 1, text: "They point inward, toward the domain/core" }, // correct
      { id: 2, text: "They point outward, toward the UI" },
      { id: 3, text: "There are no dependencies" },
      { id: 4, text: "All layers depend on the database" }
    ]
  },
  {
    id: 21,
    title: "What is a bounded context in DDD?",
    options: [
      { id: 1, text: "A boundary within which a particular domain model is defined and consistent" }, // correct
      { id: 2, text: "A database table" },
      { id: 3, text: "A network firewall" },
      { id: 4, text: "A UI component" }
    ]
  },
  {
    id: 22,
    title: "What is an aggregate in DDD?",
    options: [
      { id: 1, text: "A cluster of domain objects treated as a unit with a single root" }, // correct
      { id: 2, text: "A SQL GROUP BY query" },
      { id: 3, text: "A logging mechanism" },
      { id: 4, text: "A caching layer" }
    ]
  },
  {
    id: 23,
    title: "What is a value object in DDD?",
    options: [
      { id: 1, text: "An immutable object defined by its attributes, with no identity" }, // correct
      { id: 2, text: "An object with a unique persistent identity" },
      { id: 3, text: "A mutable global variable" },
      { id: 4, text: "A database connection" }
    ]
  },
  {
    id: 24,
    title: "What is an entity in DDD?",
    options: [
      { id: 1, text: "An object defined by a unique identity that persists over time" }, // correct
      { id: 2, text: "An immutable attribute bag" },
      { id: 3, text: "A stateless function" },
      { id: 4, text: "A message queue" }
    ]
  },
  {
    id: 25,
    title: "What is the 'ubiquitous language' in DDD?",
    options: [
      { id: 1, text: "A shared vocabulary used by developers and domain experts" }, // correct
      { id: 2, text: "A universal programming language" },
      { id: 3, text: "An international character set" },
      { id: 4, text: "A query language" }
    ]
  },
  {
    id: 26,
    title: "What does CQRS mean?",
    options: [
      { id: 1, text: "Command Query Responsibility Segregation — separating reads from writes" }, // correct
      { id: 2, text: "Centralized Query Routing Service" },
      { id: 3, text: "Cached Query Result Set" },
      { id: 4, text: "Concurrent Queue Request System" }
    ]
  },
  {
    id: 27,
    title: "What is event sourcing?",
    options: [
      { id: 1, text: "Persisting state as an ordered sequence of events" }, // correct
      { id: 2, text: "Logging only errors" },
      { id: 3, text: "Sourcing events from the UI" },
      { id: 4, text: "Caching the latest state only" }
    ]
  },
  {
    id: 28,
    title: "What trade-off does the CAP theorem describe?",
    options: [
      { id: 1, text: "Consistency, Availability, and Partition tolerance" }, // correct
      { id: 2, text: "Cost, Availability, and Performance" },
      { id: 3, text: "Caching, API, and Persistence" },
      { id: 4, text: "Concurrency, Atomicity, Performance" }
    ]
  },
  {
    id: 29,
    title: "What does 'eventual consistency' mean?",
    options: [
      { id: 1, text: "Replicas converge to the same state over time" }, // correct
      { id: 2, text: "Data is always immediately consistent" },
      { id: 3, text: "Data is never consistent" },
      { id: 4, text: "Only one node holds data" }
    ]
  },
  {
    id: 30,
    title: "What is horizontal scaling?",
    options: [
      { id: 1, text: "Adding more machines/instances" }, // correct
      { id: 2, text: "Adding more CPU/RAM to one machine" },
      { id: 3, text: "Reducing the number of servers" },
      { id: 4, text: "Compressing data" }
    ]
  },
  {
    id: 31,
    title: "What is vertical scaling?",
    options: [
      { id: 1, text: "Adding more machines" },
      { id: 2, text: "Adding more resources (CPU/RAM) to a single machine" }, // correct
      { id: 3, text: "Sharding the database" },
      { id: 4, text: "Adding a CDN" }
    ]
  },
  {
    id: 32,
    title: "What does a load balancer do?",
    options: [
      { id: 1, text: "Distributes incoming traffic across multiple instances" }, // correct
      { id: 2, text: "Stores session data" },
      { id: 3, text: "Compiles code" },
      { id: 4, text: "Encrypts the database" }
    ]
  },
  {
    id: 33,
    title: "What is the main purpose of caching?",
    options: [
      { id: 1, text: "Reduce latency and load by reusing frequently accessed data" }, // correct
      { id: 2, text: "Permanently store all data" },
      { id: 3, text: "Replace the primary database" },
      { id: 4, text: "Encrypt traffic" }
    ]
  },
  {
    id: 34,
    title: "What does the circuit breaker pattern do?",
    options: [
      { id: 1, text: "Stops calls to a failing dependency to let it recover" }, // correct
      { id: 2, text: "Retries forever until success" },
      { id: 3, text: "Caches every request" },
      { id: 4, text: "Balances load" }
    ]
  },
  {
    id: 35,
    title: "The retry pattern is best combined with what?",
    options: [
      { id: 1, text: "Exponential backoff and a retry limit" }, // correct
      { id: 2, text: "Unlimited immediate retries" },
      { id: 3, text: "Ignoring all failures" },
      { id: 4, text: "Restarting the server" }
    ]
  },
  {
    id: 36,
    title: "What does the bulkhead pattern achieve?",
    options: [
      { id: 1, text: "Isolating resources so one failure doesn't bring down the whole system" }, // correct
      { id: 2, text: "Merging all services into one" },
      { id: 3, text: "Sharing a single thread pool everywhere" },
      { id: 4, text: "Removing redundancy" }
    ]
  },
  {
    id: 37,
    title: "What is idempotency?",
    options: [
      { id: 1, text: "An operation that yields the same result even if applied multiple times" }, // correct
      { id: 2, text: "An operation that always fails" },
      { id: 3, text: "An operation that changes state each call" },
      { id: 4, text: "A type of encryption" }
    ]
  },
  {
    id: 38,
    title: "What is the saga pattern used for?",
    options: [
      { id: 1, text: "Managing distributed transactions via a sequence of local transactions with compensation" }, // correct
      { id: 2, text: "Replacing all databases with one" },
      { id: 3, text: "Caching API responses" },
      { id: 4, text: "Load balancing requests" }
    ]
  },
  {
    id: 39,
    title: "What is an anti-corruption layer?",
    options: [
      { id: 1, text: "A translation layer isolating your model from an external/legacy system" }, // correct
      { id: 2, text: "A security firewall" },
      { id: 3, text: "A data backup system" },
      { id: 4, text: "An audit log" }
    ]
  },
  {
    id: 40,
    title: "What is the strangler fig pattern?",
    options: [
      { id: 1, text: "Incrementally replacing a legacy system piece by piece" }, // correct
      { id: 2, text: "Rewriting everything at once" },
      { id: 3, text: "Shutting down all services" },
      { id: 4, text: "Encrypting legacy data" }
    ]
  },
  {
    id: 41,
    title: "What does REST primarily rely on?",
    options: [
      { id: 1, text: "HTTP verbs acting on resources" }, // correct
      { id: 2, text: "Binary RPC over TCP" },
      { id: 3, text: "A single query endpoint" },
      { id: 4, text: "Persistent sockets only" }
    ]
  },
  {
    id: 42,
    title: "What is gRPC best known for?",
    options: [
      { id: 1, text: "High-performance RPC using HTTP/2 and protocol buffers" }, // correct
      { id: 2, text: "Rendering HTML pages" },
      { id: 3, text: "Relational storage" },
      { id: 4, text: "Client-side routing" }
    ]
  },
  {
    id: 43,
    title: "What is a key benefit of GraphQL?",
    options: [
      { id: 1, text: "Clients request exactly the data they need" }, // correct
      { id: 2, text: "It eliminates the need for a server" },
      { id: 3, text: "It only supports writes" },
      { id: 4, text: "It requires no schema" }
    ]
  },
  {
    id: 44,
    title: "What is a message broker used for?",
    options: [
      { id: 1, text: "Mediating asynchronous messaging between producers and consumers" }, // correct
      { id: 2, text: "Compiling source code" },
      { id: 3, text: "Rendering UI" },
      { id: 4, text: "Hosting static files" }
    ]
  },
  {
    id: 45,
    title: "How do a queue and publish/subscribe differ?",
    options: [
      { id: 1, text: "A queue delivers a message to one consumer; pub/sub broadcasts to many subscribers" }, // correct
      { id: 2, text: "They are identical" },
      { id: 3, text: "A queue broadcasts; pub/sub delivers to one" },
      { id: 4, text: "Neither supports multiple consumers" }
    ]
  },
  {
    id: 46,
    title: "What does the Backend for Frontend (BFF) pattern provide?",
    options: [
      { id: 1, text: "A backend tailored to the needs of a specific client/frontend" }, // correct
      { id: 2, text: "A shared database for all clients" },
      { id: 3, text: "A frontend framework" },
      { id: 4, text: "A CI/CD pipeline" }
    ]
  },
  {
    id: 47,
    title: "Observability is commonly built from which three pillars?",
    options: [
      { id: 1, text: "Logs, metrics, and traces" }, // correct
      { id: 2, text: "CPU, RAM, and disk" },
      { id: 3, text: "Build, test, and deploy" },
      { id: 4, text: "Read, write, and delete" }
    ]
  },
  {
    id: 48,
    title: "What does a service mesh primarily handle?",
    options: [
      { id: 1, text: "Service-to-service networking: routing, security, and observability" }, // correct
      { id: 2, text: "UI rendering" },
      { id: 3, text: "Database schema migrations" },
      { id: 4, text: "Source control" }
    ]
  },

  // ---------- Multi-option (49-60) ----------
  {
    id: 49,
    title: "Which of the following are SOLID principles?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Single Responsibility" }, // correct
      { id: 2, text: "Open/Closed" }, // correct
      { id: 3, text: "Liskov Substitution" }, // correct
      { id: 4, text: "Dependency Inversion" } // correct
    ]
  },
  {
    id: 50,
    title: "Which of these are creational design patterns?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Singleton" }, // correct
      { id: 2, text: "Factory Method" }, // correct
      { id: 3, text: "Abstract Factory" }, // correct
      { id: 4, text: "Builder" } // correct
    ]
  },
  {
    id: 51,
    title: "Which of these are structural design patterns?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Adapter" }, // correct
      { id: 2, text: "Decorator" }, // correct
      { id: 3, text: "Facade" }, // correct
      { id: 4, text: "Proxy" } // correct
    ]
  },
  {
    id: 52,
    title: "Which of these are behavioral design patterns?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Observer" }, // correct
      { id: 2, text: "Strategy" }, // correct
      { id: 3, text: "Command" }, // correct
      { id: 4, text: "Mediator" } // correct
    ]
  },
  {
    id: 53,
    title: "Which of these are DDD building blocks?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Entities" }, // correct
      { id: 2, text: "Value Objects" }, // correct
      { id: 3, text: "Aggregates" }, // correct
      { id: 4, text: "Bounded Contexts" } // correct
    ]
  },
  {
    id: 54,
    title: "Which of these are resilience patterns?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Circuit Breaker" }, // correct
      { id: 2, text: "Retry" }, // correct
      { id: 3, text: "Bulkhead" }, // correct
      { id: 4, text: "Timeout" } // correct
    ]
  },
  {
    id: 55,
    title: "Which of these are recognized architecture styles?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Microservices" }, // correct
      { id: 2, text: "Layered (n-tier)" }, // correct
      { id: 3, text: "Event-driven" }, // correct
      { id: 4, text: "Hexagonal (Ports & Adapters)" } // correct
    ]
  },
  {
    id: 56,
    title: "Which of these are factors from the Twelve-Factor App methodology?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Store config in the environment" }, // correct
      { id: 2, text: "Execute the app as stateless processes" }, // correct
      { id: 3, text: "Keep dev/prod parity" }, // correct
      { id: 4, text: "Treat logs as event streams" } // correct
    ]
  },
  {
    id: 57,
    title: "Which techniques address data scalability and availability?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Sharding" }, // correct
      { id: 2, text: "Replication" }, // correct
      { id: 3, text: "Caching" }, // correct
      { id: 4, text: "Load balancing" } // correct
    ]
  },
  {
    id: 58,
    title: "Which of these are API styles or protocols?",
    isMultiOption: true,
    options: [
      { id: 1, text: "REST" }, // correct
      { id: 2, text: "gRPC" }, // correct
      { id: 3, text: "GraphQL" }, // correct
      { id: 4, text: "SOAP" } // correct
    ]
  },
  {
    id: 59,
    title: "Which concerns are part of observability?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Logging" }, // correct
      { id: 2, text: "Metrics" }, // correct
      { id: 3, text: "Distributed tracing" }, // correct
      { id: 4, text: "Alerting" } // correct
    ]
  },
  {
    id: 60,
    title: "Which are messaging/integration approaches in distributed systems?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Message queues" }, // correct
      { id: 2, text: "Publish/subscribe" }, // correct
      { id: 3, text: "Event-driven messaging" }, // correct
      { id: 4, text: "Saga orchestration/choreography" } // correct
    ]
  }
];

export const architectAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [2] },
  { questionId: 3, correctOptionIds: [3] },
  { questionId: 4, correctOptionIds: [4] },
  { questionId: 5, correctOptionIds: [1] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [1] },
  { questionId: 8, correctOptionIds: [3] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [1] },
  { questionId: 11, correctOptionIds: [2] },
  { questionId: 12, correctOptionIds: [1] },
  { questionId: 13, correctOptionIds: [2] },
  { questionId: 14, correctOptionIds: [3] },
  { questionId: 15, correctOptionIds: [1] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [1] },
  { questionId: 18, correctOptionIds: [1] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [1] },
  { questionId: 21, correctOptionIds: [1] },
  { questionId: 22, correctOptionIds: [1] },
  { questionId: 23, correctOptionIds: [1] },
  { questionId: 24, correctOptionIds: [1] },
  { questionId: 25, correctOptionIds: [1] },
  { questionId: 26, correctOptionIds: [1] },
  { questionId: 27, correctOptionIds: [1] },
  { questionId: 28, correctOptionIds: [1] },
  { questionId: 29, correctOptionIds: [1] },
  { questionId: 30, correctOptionIds: [1] },
  { questionId: 31, correctOptionIds: [2] },
  { questionId: 32, correctOptionIds: [1] },
  { questionId: 33, correctOptionIds: [1] },
  { questionId: 34, correctOptionIds: [1] },
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
  { questionId: 49, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 50, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 51, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 52, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 53, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 54, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 55, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 56, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 57, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 58, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 59, correctOptionIds: [1, 2, 3, 4] },
  { questionId: 60, correctOptionIds: [1, 2, 3, 4] }
];

export const softwareArchExam: ExamSubject = {
  id: signal("software-500"),
  title: signal("Software Architect Level"),
  duration: signal({hour: 1, minute: 10, second: 0}),
  questions: signal<QuizQuestion[]>(architectQuestions),
}

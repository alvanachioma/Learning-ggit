import { QuizQuestion, AnswerKey, ExamSubject } from './exam-question-services';
import { signal } from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// HTML — Fundamentals to Advanced
// 60 questions. Multi-choice questions (isMultiOption: true) are scattered
// randomly and have at most 3 correct options. Correct option(s) tagged with
// "// correct". See htmlAnswers for the answer key, htmlExam for the subject.
// ============================================================================
export const htmlQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "What does HTML stand for?",
    options: [
      { id: 1, text: "HyperText Markup Language" }, // correct
      { id: 2, text: "HighText Machine Language" },
      { id: 3, text: "Hyperlink Markup Logic" },
      { id: 4, text: "Home Tool Markup Language" }
    ]
  },
  {
    id: 2,
    title: "Which tag creates a hyperlink?",
    options: [
      { id: 1, text: "<link>" },
      { id: 2, text: "<a>" }, // correct
      { id: 3, text: "<href>" },
      { id: 4, text: "<nav>" }
    ]
  },
  {
    id: 3,
    title: "Which tag inserts an image?",
    options: [
      { id: 1, text: "<img>" }, // correct
      { id: 2, text: "<image>" },
      { id: 3, text: "<pic>" },
      { id: 4, text: "<src>" }
    ]
  },
  {
    id: 4,
    title: "Which of these are valid HTML heading tags?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<h1>" }, // correct
      { id: 2, text: "<h2>" }, // correct
      { id: 3, text: "<h3>" }, // correct
      { id: 4, text: "<head>" }
    ]
  },
  {
    id: 5,
    title: "Which attribute specifies an image's alternative text?",
    options: [
      { id: 1, text: "src" },
      { id: 2, text: "alt" }, // correct
      { id: 3, text: "title" },
      { id: 4, text: "longdesc" }
    ]
  },
  {
    id: 6,
    title: "Which tag creates an unordered list?",
    options: [
      { id: 1, text: "<ol>" },
      { id: 2, text: "<ul>" }, // correct
      { id: 3, text: "<li>" },
      { id: 4, text: "<list>" }
    ]
  },
  {
    id: 7,
    title: "Which of these are list-related HTML tags?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<ul>" }, // correct
      { id: 2, text: "<ol>" }, // correct
      { id: 3, text: "<li>" }, // correct
      { id: 4, text: "<list>" }
    ]
  },
  {
    id: 8,
    title: "Which tag defines a table row?",
    options: [
      { id: 1, text: "<td>" },
      { id: 2, text: "<tr>" }, // correct
      { id: 3, text: "<th>" },
      { id: 4, text: "<table>" }
    ]
  },
  {
    id: 9,
    title: "Which element is the largest heading?",
    options: [
      { id: 1, text: "<h1>" }, // correct
      { id: 2, text: "<h6>" },
      { id: 3, text: "<head>" },
      { id: 4, text: "<big>" }
    ]
  },
  {
    id: 10,
    title: "Which tag creates a line break?",
    options: [
      { id: 1, text: "<break>" },
      { id: 2, text: "<br>" }, // correct
      { id: 3, text: "<lb>" },
      { id: 4, text: "<hr>" }
    ]
  },
  {
    id: 11,
    title: "Which of these are valid <input> type values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "text" }, // correct
      { id: 2, text: "email" }, // correct
      { id: 3, text: "password" }, // correct
      { id: 4, text: "phone" }
    ]
  },
  {
    id: 12,
    title: "Which attribute makes a form input mandatory?",
    options: [
      { id: 1, text: "required" }, // correct
      { id: 2, text: "validate" },
      { id: 3, text: "mandatory" },
      { id: 4, text: "must" }
    ]
  },
  {
    id: 13,
    title: "Which declaration defines an HTML5 document?",
    options: [
      { id: 1, text: "<!DOCTYPE html>" }, // correct
      { id: 2, text: "<doctype>" },
      { id: 3, text: "<html5>" },
      { id: 4, text: "<!HTML>" }
    ]
  },
  {
    id: 14,
    title: "Which element contains a document's metadata?",
    options: [
      { id: 1, text: "<body>" },
      { id: 2, text: "<head>" }, // correct
      { id: 3, text: "<meta>" },
      { id: 4, text: "<title>" }
    ]
  },
  {
    id: 15,
    title: "Which of these are HTML5 semantic elements?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<header>" }, // correct
      { id: 2, text: "<article>" }, // correct
      { id: 3, text: "<footer>" }, // correct
      { id: 4, text: "<center>" }
    ]
  },
  {
    id: 16,
    title: "Which tag embeds a video?",
    options: [
      { id: 1, text: "<media>" },
      { id: 2, text: "<video>" }, // correct
      { id: 3, text: "<movie>" },
      { id: 4, text: "<vid>" }
    ]
  },
  {
    id: 17,
    title: "Which tag embeds audio?",
    options: [
      { id: 1, text: "<audio>" }, // correct
      { id: 2, text: "<sound>" },
      { id: 3, text: "<music>" },
      { id: 4, text: "<mp3>" }
    ]
  },
  {
    id: 18,
    title: "Which of these are HTML global attributes?",
    isMultiOption: true,
    options: [
      { id: 1, text: "id" }, // correct
      { id: 2, text: "class" }, // correct
      { id: 3, text: "style" }, // correct
      { id: 4, text: "href" }
    ]
  },
  {
    id: 19,
    title: "Which tag creates a dropdown list?",
    options: [
      { id: 1, text: "<dropdown>" },
      { id: 2, text: "<select>" }, // correct
      { id: 3, text: "<list>" },
      { id: 4, text: "<input>" }
    ]
  },
  {
    id: 20,
    title: "Which tag defines an option inside a dropdown?",
    options: [
      { id: 1, text: "<option>" }, // correct
      { id: 2, text: "<item>" },
      { id: 3, text: "<li>" },
      { id: 4, text: "<opt>" }
    ]
  },
  {
    id: 21,
    title: "Which is a generic, non-semantic block container?",
    options: [
      { id: 1, text: "<div>" }, // correct
      { id: 2, text: "<span>" },
      { id: 3, text: "<p>" },
      { id: 4, text: "<box>" }
    ]
  },
  {
    id: 22,
    title: "Which of these are valid ways to include CSS in a page?",
    isMultiOption: true,
    options: [
      { id: 1, text: "An external <link> stylesheet" }, // correct
      { id: 2, text: "A <style> block" }, // correct
      { id: 3, text: "The inline style attribute" }, // correct
      { id: 4, text: "A <css> tag" }
    ]
  },
  {
    id: 23,
    title: "Which attribute on <link> points to an external stylesheet?",
    options: [
      { id: 1, text: "src" },
      { id: 2, text: "href" }, // correct
      { id: 3, text: "rel" },
      { id: 4, text: "link" }
    ]
  },
  {
    id: 24,
    title: "Which tag embeds JavaScript?",
    options: [
      { id: 1, text: "<js>" },
      { id: 2, text: "<script>" }, // correct
      { id: 3, text: "<javascript>" },
      { id: 4, text: "<code>" }
    ]
  },
  {
    id: 25,
    title: "Which tag defines an HTML form?",
    options: [
      { id: 1, text: "<form>" }, // correct
      { id: 2, text: "<input>" },
      { id: 3, text: "<fieldset>" },
      { id: 4, text: "<formfield>" }
    ]
  },
  {
    id: 26,
    title: "Which of these are valid attributes of the <form> element?",
    isMultiOption: true,
    options: [
      { id: 1, text: "action" }, // correct
      { id: 2, text: "method" }, // correct
      { id: 3, text: "target" }, // correct
      { id: 4, text: "src" }
    ]
  },
  {
    id: 27,
    title: "Which input type creates a checkbox?",
    options: [
      { id: 1, text: "check" },
      { id: 2, text: "checkbox" }, // correct
      { id: 3, text: "tick" },
      { id: 4, text: "box" }
    ]
  },
  {
    id: 28,
    title: "Which input type creates a radio button?",
    options: [
      { id: 1, text: "radio" }, // correct
      { id: 2, text: "option" },
      { id: 3, text: "select" },
      { id: 4, text: "choice" }
    ]
  },
  {
    id: 29,
    title: "Which of these are semantic sectioning elements?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<nav>" }, // correct
      { id: 2, text: "<section>" }, // correct
      { id: 3, text: "<aside>" }, // correct
      { id: 4, text: "<div>" }
    ]
  },
  {
    id: 30,
    title: "Which tag marks emphasized (italic, semantic) text?",
    options: [
      { id: 1, text: "<i>" },
      { id: 2, text: "<em>" }, // correct
      { id: 3, text: "<italic>" },
      { id: 4, text: "<emphasis>" }
    ]
  },
  {
    id: 31,
    title: "Which tag marks strong importance (semantic)?",
    options: [
      { id: 1, text: "<strong>" }, // correct
      { id: 2, text: "<b>" },
      { id: 3, text: "<bold>" },
      { id: 4, text: "<important>" }
    ]
  },
  {
    id: 32,
    title: "How do you open a link in a new browser tab?",
    options: [
      { id: 1, text: "target=\"_blank\"" }, // correct
      { id: 2, text: "newtab=\"true\"" },
      { id: 3, text: "rel=\"new\"" },
      { id: 4, text: "open=\"tab\"" }
    ]
  },
  {
    id: 33,
    title: "Which of these are valid table tags?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<table>" }, // correct
      { id: 2, text: "<tr>" }, // correct
      { id: 3, text: "<td>" }, // correct
      { id: 4, text: "<column>" }
    ]
  },
  {
    id: 34,
    title: "Which tag defines a table header cell?",
    options: [
      { id: 1, text: "<td>" },
      { id: 2, text: "<th>" }, // correct
      { id: 3, text: "<thead>" },
      { id: 4, text: "<header>" }
    ]
  },
  {
    id: 35,
    title: "Which tag groups the header content of a table?",
    options: [
      { id: 1, text: "<thead>" }, // correct
      { id: 2, text: "<header>" },
      { id: 3, text: "<th>" },
      { id: 4, text: "<top>" }
    ]
  },
  {
    id: 36,
    title: "Which attribute assigns a unique identifier to an element?",
    options: [
      { id: 1, text: "class" },
      { id: 2, text: "id" }, // correct
      { id: 3, text: "name" },
      { id: 4, text: "key" }
    ]
  },
  {
    id: 37,
    title: "Which of these are valid attributes of <img>?",
    isMultiOption: true,
    options: [
      { id: 1, text: "src" }, // correct
      { id: 2, text: "alt" }, // correct
      { id: 3, text: "width" }, // correct
      { id: 4, text: "method" }
    ]
  },
  {
    id: 38,
    title: "Which tag creates an ordered (numbered) list?",
    options: [
      { id: 1, text: "<ul>" },
      { id: 2, text: "<ol>" }, // correct
      { id: 3, text: "<li>" },
      { id: 4, text: "<nl>" }
    ]
  },
  {
    id: 39,
    title: "Which entity represents a non-breaking space?",
    options: [
      { id: 1, text: "&space;" },
      { id: 2, text: "&nbsp;" }, // correct
      { id: 3, text: "&sp;" },
      { id: 4, text: "&blank;" }
    ]
  },
  {
    id: 40,
    title: "Which tag defines a paragraph?",
    options: [
      { id: 1, text: "<paragraph>" },
      { id: 2, text: "<p>" }, // correct
      { id: 3, text: "<para>" },
      { id: 4, text: "<text>" }
    ]
  },
  {
    id: 41,
    title: "Which of these are block-level elements?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<div>" }, // correct
      { id: 2, text: "<p>" }, // correct
      { id: 3, text: "<section>" }, // correct
      { id: 4, text: "<span>" }
    ]
  },
  {
    id: 42,
    title: "Which element is inline by default?",
    options: [
      { id: 1, text: "<div>" },
      { id: 2, text: "<span>" }, // correct
      { id: 3, text: "<p>" },
      { id: 4, text: "<section>" }
    ]
  },
  {
    id: 43,
    title: "Which attribute associates a <label> with an input?",
    options: [
      { id: 1, text: "id" },
      { id: 2, text: "for" }, // correct
      { id: 3, text: "name" },
      { id: 4, text: "label" }
    ]
  },
  {
    id: 44,
    title: "Which of these are HTML5 input types?",
    isMultiOption: true,
    options: [
      { id: 1, text: "date" }, // correct
      { id: 2, text: "range" }, // correct
      { id: 3, text: "color" }, // correct
      { id: 4, text: "slider" }
    ]
  },
  {
    id: 45,
    title: "Which semantic tag wraps navigation links?",
    options: [
      { id: 1, text: "<menu>" },
      { id: 2, text: "<nav>" }, // correct
      { id: 3, text: "<navigation>" },
      { id: 4, text: "<links>" }
    ]
  },
  {
    id: 46,
    title: "What does <meta charset=\"UTF-8\"> do?",
    options: [
      { id: 1, text: "Sets the page title" },
      { id: 2, text: "Declares the character encoding" }, // correct
      { id: 3, text: "Links a stylesheet" },
      { id: 4, text: "Sets the language" }
    ]
  },
  {
    id: 47,
    title: "Which attribute shows a tooltip on hover?",
    options: [
      { id: 1, text: "alt" },
      { id: 2, text: "title" }, // correct
      { id: 3, text: "tooltip" },
      { id: 4, text: "hint" }
    ]
  },
  {
    id: 48,
    title: "Which attributes let a table cell span multiple columns or rows?",
    isMultiOption: true,
    options: [
      { id: 1, text: "colspan" }, // correct
      { id: 2, text: "rowspan" }, // correct
      { id: 3, text: "cellmerge" },
      { id: 4, text: "spanall" }
    ]
  },
  {
    id: 49,
    title: "Which semantic element wraps the dominant content of a page?",
    options: [
      { id: 1, text: "<content>" },
      { id: 2, text: "<main>" }, // correct
      { id: 3, text: "<body>" },
      { id: 4, text: "<primary>" }
    ]
  },
  {
    id: 50,
    title: "Which attribute disables a form control?",
    options: [
      { id: 1, text: "readonly" },
      { id: 2, text: "disabled" }, // correct
      { id: 3, text: "inactive" },
      { id: 4, text: "off" }
    ]
  },
  {
    id: 51,
    title: "Which of these are valid <button>/<input> type values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "submit" }, // correct
      { id: 2, text: "button" }, // correct
      { id: 3, text: "reset" }, // correct
      { id: 4, text: "click" }
    ]
  },
  {
    id: 52,
    title: "Which tag creates a clickable button element?",
    options: [
      { id: 1, text: "<button>" }, // correct
      { id: 2, text: "<btn>" },
      { id: 3, text: "<click>" },
      { id: 4, text: "<pushbutton>" }
    ]
  },
  {
    id: 53,
    title: "Which attribute shows hint text inside an empty input?",
    options: [
      { id: 1, text: "hint" },
      { id: 2, text: "placeholder" }, // correct
      { id: 3, text: "default" },
      { id: 4, text: "ghost" }
    ]
  },
  {
    id: 54,
    title: "Which of these are container elements that can hold flow content?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<div>" }, // correct
      { id: 2, text: "<section>" }, // correct
      { id: 3, text: "<article>" }, // correct
      { id: 4, text: "<br>" }
    ]
  },
  {
    id: 55,
    title: "Which tag defines a description list?",
    options: [
      { id: 1, text: "<dl>" }, // correct
      { id: 2, text: "<list>" },
      { id: 3, text: "<ul>" },
      { id: 4, text: "<desc>" }
    ]
  },
  {
    id: 56,
    title: "Which tag defines a term in a description list?",
    options: [
      { id: 1, text: "<dt>" }, // correct
      { id: 2, text: "<dd>" },
      { id: 3, text: "<term>" },
      { id: 4, text: "<li>" }
    ]
  },
  {
    id: 57,
    title: "Which of these are HTML5 form-validation attributes?",
    isMultiOption: true,
    options: [
      { id: 1, text: "required" }, // correct
      { id: 2, text: "pattern" }, // correct
      { id: 3, text: "maxlength" }, // correct
      { id: 4, text: "valid" }
    ]
  },
  {
    id: 58,
    title: "What is the main purpose of the alt attribute?",
    options: [
      { id: 1, text: "It improves SEO ranking only" },
      { id: 2, text: "It provides alternative text for images (accessibility)" }, // correct
      { id: 3, text: "It sets the image dimensions" },
      { id: 4, text: "It adds a border to the image" }
    ]
  },
  {
    id: 59,
    title: "Which of these are valid text-level semantic elements?",
    isMultiOption: true,
    options: [
      { id: 1, text: "<em>" }, // correct
      { id: 2, text: "<strong>" }, // correct
      { id: 3, text: "<mark>" }, // correct
      { id: 4, text: "<bold>" }
    ]
  },
  {
    id: 60,
    title: "Which is the correct HTML5 doctype declaration?",
    options: [
      { id: 1, text: "<!DOCTYPE html>" }, // correct
      { id: 2, text: "<!DOCTYPE HTML5>" },
      { id: 3, text: "<doctype html5>" },
      { id: 4, text: "<html version=\"5\">" }
    ]
  }
];

export const htmlAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [2] },
  { questionId: 3, correctOptionIds: [1] },
  { questionId: 4, correctOptionIds: [1, 2, 3] },
  { questionId: 5, correctOptionIds: [2] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [1, 2, 3] },
  { questionId: 8, correctOptionIds: [2] },
  { questionId: 9, correctOptionIds: [1] },
  { questionId: 10, correctOptionIds: [2] },
  { questionId: 11, correctOptionIds: [1, 2, 3] },
  { questionId: 12, correctOptionIds: [1] },
  { questionId: 13, correctOptionIds: [1] },
  { questionId: 14, correctOptionIds: [2] },
  { questionId: 15, correctOptionIds: [1, 2, 3] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [1] },
  { questionId: 18, correctOptionIds: [1, 2, 3] },
  { questionId: 19, correctOptionIds: [2] },
  { questionId: 20, correctOptionIds: [1] },
  { questionId: 21, correctOptionIds: [1] },
  { questionId: 22, correctOptionIds: [1, 2, 3] },
  { questionId: 23, correctOptionIds: [2] },
  { questionId: 24, correctOptionIds: [2] },
  { questionId: 25, correctOptionIds: [1] },
  { questionId: 26, correctOptionIds: [1, 2, 3] },
  { questionId: 27, correctOptionIds: [2] },
  { questionId: 28, correctOptionIds: [1] },
  { questionId: 29, correctOptionIds: [1, 2, 3] },
  { questionId: 30, correctOptionIds: [2] },
  { questionId: 31, correctOptionIds: [1] },
  { questionId: 32, correctOptionIds: [1] },
  { questionId: 33, correctOptionIds: [1, 2, 3] },
  { questionId: 34, correctOptionIds: [2] },
  { questionId: 35, correctOptionIds: [1] },
  { questionId: 36, correctOptionIds: [2] },
  { questionId: 37, correctOptionIds: [1, 2, 3] },
  { questionId: 38, correctOptionIds: [2] },
  { questionId: 39, correctOptionIds: [2] },
  { questionId: 40, correctOptionIds: [2] },
  { questionId: 41, correctOptionIds: [1, 2, 3] },
  { questionId: 42, correctOptionIds: [2] },
  { questionId: 43, correctOptionIds: [2] },
  { questionId: 44, correctOptionIds: [1, 2, 3] },
  { questionId: 45, correctOptionIds: [2] },
  { questionId: 46, correctOptionIds: [2] },
  { questionId: 47, correctOptionIds: [2] },
  { questionId: 48, correctOptionIds: [1, 2] },
  { questionId: 49, correctOptionIds: [2] },
  { questionId: 50, correctOptionIds: [2] },
  { questionId: 51, correctOptionIds: [1, 2, 3] },
  { questionId: 52, correctOptionIds: [1] },
  { questionId: 53, correctOptionIds: [2] },
  { questionId: 54, correctOptionIds: [1, 2, 3] },
  { questionId: 55, correctOptionIds: [1] },
  { questionId: 56, correctOptionIds: [1] },
  { questionId: 57, correctOptionIds: [1, 2, 3] },
  { questionId: 58, correctOptionIds: [2] },
  { questionId: 59, correctOptionIds: [1, 2, 3] },
  { questionId: 60, correctOptionIds: [1] }
];

const htmlQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...htmlQuestions]));
htmlQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const htmlExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal("html-100"),
  title: signal("HTML — Fundamentals to Advanced"),
  duration: signal({ hour: 1, minute: 0, second: 0 }),
  questions: htmlQuestionsSignal
};

import { QuizQuestion, AnswerKey, ExamSubject } from './exam-question-services';
import { signal } from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// CSS — Beginner to Advanced
// 70 questions. Multi-choice questions (isMultiOption: true) are scattered
// randomly and have at most 3 correct options. Correct option(s) tagged with
// "// correct". See cssAnswers for the answer key, cssExam for the subject.
// ============================================================================
export const cssQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "What does CSS stand for?",
    options: [
      { id: 1, text: "Cascading Style Sheets" }, // correct
      { id: 2, text: "Computer Style Sheets" },
      { id: 3, text: "Creative Style System" },
      { id: 4, text: "Colorful Style Sheets" }
    ]
  },
  {
    id: 2,
    title: "Which property sets the text color?",
    options: [
      { id: 1, text: "color" }, // correct
      { id: 2, text: "text-color" },
      { id: 3, text: "font-color" },
      { id: 4, text: "fill" }
    ]
  },
  {
    id: 3,
    title: "Which property sets the background color?",
    options: [
      { id: 1, text: "bgcolor" },
      { id: 2, text: "background-color" }, // correct
      { id: 3, text: "color" },
      { id: 4, text: "fill" }
    ]
  },
  {
    id: 4,
    title: "Which of these are valid ways to apply CSS to a page?",
    isMultiOption: true,
    options: [
      { id: 1, text: "An external stylesheet" }, // correct
      { id: 2, text: "An internal <style> block" }, // correct
      { id: 3, text: "The inline style attribute" }, // correct
      { id: 4, text: "Imported via a <script> tag" }
    ]
  },
  {
    id: 5,
    title: "Which property sets the size of text?",
    options: [
      { id: 1, text: "text-size" },
      { id: 2, text: "font-size" }, // correct
      { id: 3, text: "size" },
      { id: 4, text: "font" }
    ]
  },
  {
    id: 6,
    title: "Which selector targets an element by its id?",
    options: [
      { id: 1, text: "#id" }, // correct
      { id: 2, text: ".id" },
      { id: 3, text: "*id" },
      { id: 4, text: "id()" }
    ]
  },
  {
    id: 7,
    title: "Which selector targets elements by class?",
    options: [
      { id: 1, text: "#class" },
      { id: 2, text: ".class" }, // correct
      { id: 3, text: "@class" },
      { id: 4, text: "class()" }
    ]
  },
  {
    id: 8,
    title: "Which of these are valid CSS selectors?",
    isMultiOption: true,
    options: [
      { id: 1, text: "An element (type) selector" }, // correct
      { id: 2, text: ".class" }, // correct
      { id: 3, text: "#id" }, // correct
      { id: 4, text: "@id" }
    ]
  },
  {
    id: 9,
    title: "Which property controls spacing inside an element's border?",
    options: [
      { id: 1, text: "margin" },
      { id: 2, text: "padding" }, // correct
      { id: 3, text: "spacing" },
      { id: 4, text: "gap" }
    ]
  },
  {
    id: 10,
    title: "Which property controls spacing outside an element's border?",
    options: [
      { id: 1, text: "margin" }, // correct
      { id: 2, text: "padding" },
      { id: 3, text: "border" },
      { id: 4, text: "space" }
    ]
  },
  {
    id: 11,
    title: "Which of these are parts of the CSS box model?",
    isMultiOption: true,
    options: [
      { id: 1, text: "content" }, // correct
      { id: 2, text: "padding" }, // correct
      { id: 3, text: "border" }, // correct
      { id: 4, text: "outline" }
    ]
  },
  {
    id: 12,
    title: "Which property makes text bold?",
    options: [
      { id: 1, text: "font-style" },
      { id: 2, text: "font-weight" }, // correct
      { id: 3, text: "text-bold" },
      { id: 4, text: "bold" }
    ]
  },
  {
    id: 13,
    title: "Which property changes the font family?",
    options: [
      { id: 1, text: "font-family" }, // correct
      { id: 2, text: "font-name" },
      { id: 3, text: "typeface" },
      { id: 4, text: "font-type" }
    ]
  },
  {
    id: 14,
    title: "Which of these are valid values for the display property?",
    isMultiOption: true,
    options: [
      { id: 1, text: "block" }, // correct
      { id: 2, text: "inline" }, // correct
      { id: 3, text: "flex" }, // correct
      { id: 4, text: "centered" }
    ]
  },
  {
    id: 15,
    title: "Which display value removes an element from the layout entirely?",
    options: [
      { id: 1, text: "hidden" },
      { id: 2, text: "none" }, // correct
      { id: 3, text: "invisible" },
      { id: 4, text: "collapse" }
    ]
  },
  {
    id: 16,
    title: "Which property adjusts the space between letters?",
    options: [
      { id: 1, text: "letter-spacing" }, // correct
      { id: 2, text: "char-space" },
      { id: 3, text: "spacing" },
      { id: 4, text: "kerning" }
    ]
  },
  {
    id: 17,
    title: "Which of these are valid values for the position property?",
    isMultiOption: true,
    options: [
      { id: 1, text: "static" }, // correct
      { id: 2, text: "relative" }, // correct
      { id: 3, text: "absolute" }, // correct
      { id: 4, text: "centered" }
    ]
  },
  {
    id: 18,
    title: "Which position value fixes an element relative to the viewport?",
    options: [
      { id: 1, text: "absolute" },
      { id: 2, text: "fixed" }, // correct
      { id: 3, text: "sticky" },
      { id: 4, text: "relative" }
    ]
  },
  {
    id: 19,
    title: "Which position value positions relative to the nearest positioned ancestor?",
    options: [
      { id: 1, text: "absolute" }, // correct
      { id: 2, text: "relative" },
      { id: 3, text: "fixed" },
      { id: 4, text: "static" }
    ]
  },
  {
    id: 20,
    title: "Which of these are valid CSS length/size units?",
    isMultiOption: true,
    options: [
      { id: 1, text: "px" }, // correct
      { id: 2, text: "em" }, // correct
      { id: 3, text: "%" }, // correct
      { id: 4, text: "dp" }
    ]
  },
  {
    id: 21,
    title: "Which property rounds the corners of an element?",
    options: [
      { id: 1, text: "corner-radius" },
      { id: 2, text: "border-radius" }, // correct
      { id: 3, text: "round" },
      { id: 4, text: "radius" }
    ]
  },
  {
    id: 22,
    title: "Which property adds a shadow to a box?",
    options: [
      { id: 1, text: "box-shadow" }, // correct
      { id: 2, text: "shadow" },
      { id: 3, text: "drop-shadow" },
      { id: 4, text: "elevation" }
    ]
  },
  {
    id: 23,
    title: "Which of these relate to Flexbox?",
    isMultiOption: true,
    options: [
      { id: 1, text: "display: flex" }, // correct
      { id: 2, text: "justify-content" }, // correct
      { id: 3, text: "align-items" }, // correct
      { id: 4, text: "float" }
    ]
  },
  {
    id: 24,
    title: "Which flexbox property aligns items along the main axis?",
    options: [
      { id: 1, text: "align-items" },
      { id: 2, text: "justify-content" }, // correct
      { id: 3, text: "align-self" },
      { id: 4, text: "place-items" }
    ]
  },
  {
    id: 25,
    title: "Which flexbox property aligns items along the cross axis?",
    options: [
      { id: 1, text: "align-items" }, // correct
      { id: 2, text: "justify-content" },
      { id: 3, text: "align-content" },
      { id: 4, text: "vertical-align" }
    ]
  },
  {
    id: 26,
    title: "Which of these are valid justify-content values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "flex-start" }, // correct
      { id: 2, text: "center" }, // correct
      { id: 3, text: "space-between" }, // correct
      { id: 4, text: "align" }
    ]
  },
  {
    id: 27,
    title: "Which property sets the direction of the flex main axis?",
    options: [
      { id: 1, text: "flex-flow" },
      { id: 2, text: "flex-direction" }, // correct
      { id: 3, text: "direction" },
      { id: 4, text: "axis" }
    ]
  },
  {
    id: 28,
    title: "Which of these relate to CSS Grid?",
    isMultiOption: true,
    options: [
      { id: 1, text: "display: grid" }, // correct
      { id: 2, text: "grid-template-columns" }, // correct
      { id: 3, text: "gap" }, // correct
      { id: 4, text: "flex-wrap" }
    ]
  },
  {
    id: 29,
    title: "Which property defines the columns of a grid?",
    options: [
      { id: 1, text: "grid-columns" },
      { id: 2, text: "grid-template-columns" }, // correct
      { id: 3, text: "columns" },
      { id: 4, text: "grid-cols" }
    ]
  },
  {
    id: 30,
    title: "Which unit represents a fraction of available space in a grid?",
    options: [
      { id: 1, text: "fr" }, // correct
      { id: 2, text: "gr" },
      { id: 3, text: "fx" },
      { id: 4, text: "grid" }
    ]
  },
  {
    id: 31,
    title: "Which of these are valid CSS color formats?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Hex (#rrggbb)" }, // correct
      { id: 2, text: "rgb()" }, // correct
      { id: 3, text: "hsl()" }, // correct
      { id: 4, text: "cmyk()" }
    ]
  },
  {
    id: 32,
    title: "Which property controls an element's transparency?",
    options: [
      { id: 1, text: "visibility" },
      { id: 2, text: "opacity" }, // correct
      { id: 3, text: "transparency" },
      { id: 4, text: "alpha" }
    ]
  },
  {
    id: 33,
    title: "Which property sets horizontal text alignment?",
    options: [
      { id: 1, text: "text-align" }, // correct
      { id: 2, text: "align" },
      { id: 3, text: "text-position" },
      { id: 4, text: "justify" }
    ]
  },
  {
    id: 34,
    title: "Which of these are valid text-align values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "left" }, // correct
      { id: 2, text: "center" }, // correct
      { id: 3, text: "justify" }, // correct
      { id: 4, text: "middle" }
    ]
  },
  {
    id: 35,
    title: "Which property adds or removes underlines on text?",
    options: [
      { id: 1, text: "text-style" },
      { id: 2, text: "text-decoration" }, // correct
      { id: 3, text: "underline" },
      { id: 4, text: "font-decoration" }
    ]
  },
  {
    id: 36,
    title: "Which pseudo-class styles an element when hovered?",
    options: [
      { id: 1, text: ":hover" }, // correct
      { id: 2, text: ":mouseover" },
      { id: 3, text: ":over" },
      { id: 4, text: ":active" }
    ]
  },
  {
    id: 37,
    title: "Which of these are valid pseudo-classes?",
    isMultiOption: true,
    options: [
      { id: 1, text: ":hover" }, // correct
      { id: 2, text: ":focus" }, // correct
      { id: 3, text: ":first-child" }, // correct
      { id: 4, text: ":background" }
    ]
  },
  {
    id: 38,
    title: "Which pseudo-element styles the first line of text?",
    options: [
      { id: 1, text: "::first-line" }, // correct
      { id: 2, text: "::line" },
      { id: 3, text: ":first-line()" },
      { id: 4, text: "::topline" }
    ]
  },
  {
    id: 39,
    title: "Which of these are valid pseudo-elements?",
    isMultiOption: true,
    options: [
      { id: 1, text: "::before" }, // correct
      { id: 2, text: "::after" }, // correct
      { id: 3, text: "::first-letter" }, // correct
      { id: 4, text: "::hover" }
    ]
  },
  {
    id: 40,
    title: "Which at-rule defines responsive breakpoints?",
    options: [
      { id: 1, text: "@responsive" },
      { id: 2, text: "@media" }, // correct
      { id: 3, text: "@screen" },
      { id: 4, text: "@breakpoint" }
    ]
  },
  {
    id: 41,
    title: "Which of these are valid @media query features?",
    isMultiOption: true,
    options: [
      { id: 1, text: "max-width" }, // correct
      { id: 2, text: "min-width" }, // correct
      { id: 3, text: "orientation" }, // correct
      { id: 4, text: "screen-size" }
    ]
  },
  {
    id: 42,
    title: "Which property controls the stacking order of overlapping elements?",
    options: [
      { id: 1, text: "z-index" }, // correct
      { id: 2, text: "layer" },
      { id: 3, text: "stack-order" },
      { id: 4, text: "depth" }
    ]
  },
  {
    id: 43,
    title: "Which property controls what happens to content that exceeds its box?",
    options: [
      { id: 1, text: "scroll" },
      { id: 2, text: "overflow" }, // correct
      { id: 3, text: "clip" },
      { id: 4, text: "wrap" }
    ]
  },
  {
    id: 44,
    title: "Which of these are valid overflow values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "visible" }, // correct
      { id: 2, text: "hidden" }, // correct
      { id: 3, text: "scroll" }, // correct
      { id: 4, text: "block" }
    ]
  },
  {
    id: 45,
    title: "Which property animates property changes smoothly over time?",
    options: [
      { id: 1, text: "transition" }, // correct
      { id: 2, text: "animate" },
      { id: 3, text: "ease" },
      { id: 4, text: "transform" }
    ]
  },
  {
    id: 46,
    title: "Which of these relate to CSS animations?",
    isMultiOption: true,
    options: [
      { id: 1, text: "animation-name" }, // correct
      { id: 2, text: "animation-duration" }, // correct
      { id: 3, text: "@keyframes" }, // correct
      { id: 4, text: "z-index" }
    ]
  },
  {
    id: 47,
    title: "Which at-rule defines animation keyframes?",
    options: [
      { id: 1, text: "@animation" },
      { id: 2, text: "@keyframes" }, // correct
      { id: 3, text: "@frames" },
      { id: 4, text: "@motion" }
    ]
  },
  {
    id: 48,
    title: "Which property moves, scales, or rotates an element?",
    options: [
      { id: 1, text: "transform" }, // correct
      { id: 2, text: "translate" },
      { id: 3, text: "move" },
      { id: 4, text: "position" }
    ]
  },
  {
    id: 49,
    title: "Which of these are valid transform functions?",
    isMultiOption: true,
    options: [
      { id: 1, text: "translate()" }, // correct
      { id: 2, text: "rotate()" }, // correct
      { id: 3, text: "scale()" }, // correct
      { id: 4, text: "move()" }
    ]
  },
  {
    id: 50,
    title: "Which property sets an element's width?",
    options: [
      { id: 1, text: "width" }, // correct
      { id: 2, text: "size" },
      { id: 3, text: "w" },
      { id: 4, text: "length" }
    ]
  },
  {
    id: 51,
    title: "Which property sets a maximum width?",
    options: [
      { id: 1, text: "width-max" },
      { id: 2, text: "max-width" }, // correct
      { id: 3, text: "maximum-width" },
      { id: 4, text: "width-limit" }
    ]
  },
  {
    id: 52,
    title: "Which of these are valid box-sizing values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "content-box" }, // correct
      { id: 2, text: "border-box" }, // correct
      { id: 3, text: "padding-box" },
      { id: 4, text: "margin-box" }
    ]
  },
  {
    id: 53,
    title: "What does box-sizing: border-box do?",
    options: [
      { id: 1, text: "Excludes padding and border from the width" },
      { id: 2, text: "Includes padding and border within the element's width" }, // correct
      { id: 3, text: "Adds margin to the width" },
      { id: 4, text: "Removes the border" }
    ]
  },
  {
    id: 54,
    title: "Which property sets the space between flex or grid items?",
    options: [
      { id: 1, text: "spacing" },
      { id: 2, text: "gap" }, // correct
      { id: 3, text: "margin" },
      { id: 4, text: "item-space" }
    ]
  },
  {
    id: 55,
    title: "Which of these are valid font-weight values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "normal" }, // correct
      { id: 2, text: "bold" }, // correct
      { id: 3, text: "700" }, // correct
      { id: 4, text: "heavy" }
    ]
  },
  {
    id: 56,
    title: "Which property changes the mouse cursor appearance?",
    options: [
      { id: 1, text: "pointer-style" },
      { id: 2, text: "cursor" }, // correct
      { id: 3, text: "mouse" },
      { id: 4, text: "hover" }
    ]
  },
  {
    id: 57,
    title: "Which property changes the bullet style of a list?",
    options: [
      { id: 1, text: "list-style-type" }, // correct
      { id: 2, text: "bullet" },
      { id: 3, text: "list-bullet" },
      { id: 4, text: "marker-type" }
    ]
  },
  {
    id: 58,
    title: "Which of these are valid CSS combinators?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Descendant (space)" }, // correct
      { id: 2, text: "Child (>)" }, // correct
      { id: 3, text: "Adjacent sibling (+)" }, // correct
      { id: 4, text: "At (@)" }
    ]
  },
  {
    id: 59,
    title: "Which selector matches every element (the universal selector)?",
    options: [
      { id: 1, text: "*" }, // correct
      { id: 2, text: "all" },
      { id: 3, text: "%" },
      { id: 4, text: "$" }
    ]
  },
  {
    id: 60,
    title: "Which of these statements about CSS specificity are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Inline styles have very high specificity" }, // correct
      { id: 2, text: "An #id selector beats a .class selector" }, // correct
      { id: 3, text: "!important overrides normal declarations" }, // correct
      { id: 4, text: "Comments increase specificity" }
    ]
  },
  {
    id: 61,
    title: "Which property sets the height of a line of text?",
    options: [
      { id: 1, text: "line-spacing" },
      { id: 2, text: "line-height" }, // correct
      { id: 3, text: "leading" },
      { id: 4, text: "text-height" }
    ]
  },
  {
    id: 62,
    title: "Which display value flows inline but accepts width and height?",
    options: [
      { id: 1, text: "inline" },
      { id: 2, text: "inline-block" }, // correct
      { id: 3, text: "block-inline" },
      { id: 4, text: "flex" }
    ]
  },
  {
    id: 63,
    title: "Which of these are valid background-related properties?",
    isMultiOption: true,
    options: [
      { id: 1, text: "background-color" }, // correct
      { id: 2, text: "background-image" }, // correct
      { id: 3, text: "background-size" }, // correct
      { id: 4, text: "background-weight" }
    ]
  },
  {
    id: 64,
    title: "Which property controls whether a background image repeats?",
    options: [
      { id: 1, text: "background-repeat" }, // correct
      { id: 2, text: "bg-tile" },
      { id: 3, text: "repeat" },
      { id: 4, text: "background-tile" }
    ]
  },
  {
    id: 65,
    title: "Which CSS feature lets you define reusable variables?",
    options: [
      { id: 1, text: "Custom properties (--var)" }, // correct
      { id: 2, text: "Mixins" },
      { id: 3, text: "Constants" },
      { id: 4, text: "Functions" }
    ]
  },
  {
    id: 66,
    title: "Which of these statements about CSS custom properties (variables) are true?",
    isMultiOption: true,
    options: [
      { id: 1, text: "They are declared with a -- prefix" }, // correct
      { id: 2, text: "They are read with var()" }, // correct
      { id: 3, text: "They can be scoped to a selector" }, // correct
      { id: 4, text: "They only work in SCSS" }
    ]
  },
  {
    id: 67,
    title: "Which function reads the value of a custom property?",
    options: [
      { id: 1, text: "value()" },
      { id: 2, text: "var()" }, // correct
      { id: 3, text: "get()" },
      { id: 4, text: "custom()" }
    ]
  },
  {
    id: 68,
    title: "Which property controls whether flex items wrap onto multiple lines?",
    options: [
      { id: 1, text: "flex-wrap" }, // correct
      { id: 2, text: "wrap" },
      { id: 3, text: "flex-flow-wrap" },
      { id: 4, text: "wrap-items" }
    ]
  },
  {
    id: 69,
    title: "Which of these are valid position property values?",
    isMultiOption: true,
    options: [
      { id: 1, text: "static" }, // correct
      { id: 2, text: "relative" }, // correct
      { id: 3, text: "sticky" }, // correct
      { id: 4, text: "floating" }
    ]
  },
  {
    id: 70,
    title: "Which media query targets viewports up to 600px wide?",
    options: [
      { id: 1, text: "@media (width < 600px only)" },
      { id: 2, text: "@media (max-width: 600px)" }, // correct
      { id: 3, text: "@media (screen: 600px)" },
      { id: 4, text: "@media (max: 600px)" }
    ]
  }
];

export const cssAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [1] },
  { questionId: 2, correctOptionIds: [1] },
  { questionId: 3, correctOptionIds: [2] },
  { questionId: 4, correctOptionIds: [1, 2, 3] },
  { questionId: 5, correctOptionIds: [2] },
  { questionId: 6, correctOptionIds: [1] },
  { questionId: 7, correctOptionIds: [2] },
  { questionId: 8, correctOptionIds: [1, 2, 3] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [1] },
  { questionId: 11, correctOptionIds: [1, 2, 3] },
  { questionId: 12, correctOptionIds: [2] },
  { questionId: 13, correctOptionIds: [1] },
  { questionId: 14, correctOptionIds: [1, 2, 3] },
  { questionId: 15, correctOptionIds: [2] },
  { questionId: 16, correctOptionIds: [1] },
  { questionId: 17, correctOptionIds: [1, 2, 3] },
  { questionId: 18, correctOptionIds: [2] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [1, 2, 3] },
  { questionId: 21, correctOptionIds: [2] },
  { questionId: 22, correctOptionIds: [1] },
  { questionId: 23, correctOptionIds: [1, 2, 3] },
  { questionId: 24, correctOptionIds: [2] },
  { questionId: 25, correctOptionIds: [1] },
  { questionId: 26, correctOptionIds: [1, 2, 3] },
  { questionId: 27, correctOptionIds: [2] },
  { questionId: 28, correctOptionIds: [1, 2, 3] },
  { questionId: 29, correctOptionIds: [2] },
  { questionId: 30, correctOptionIds: [1] },
  { questionId: 31, correctOptionIds: [1, 2, 3] },
  { questionId: 32, correctOptionIds: [2] },
  { questionId: 33, correctOptionIds: [1] },
  { questionId: 34, correctOptionIds: [1, 2, 3] },
  { questionId: 35, correctOptionIds: [2] },
  { questionId: 36, correctOptionIds: [1] },
  { questionId: 37, correctOptionIds: [1, 2, 3] },
  { questionId: 38, correctOptionIds: [1] },
  { questionId: 39, correctOptionIds: [1, 2, 3] },
  { questionId: 40, correctOptionIds: [2] },
  { questionId: 41, correctOptionIds: [1, 2, 3] },
  { questionId: 42, correctOptionIds: [1] },
  { questionId: 43, correctOptionIds: [2] },
  { questionId: 44, correctOptionIds: [1, 2, 3] },
  { questionId: 45, correctOptionIds: [1] },
  { questionId: 46, correctOptionIds: [1, 2, 3] },
  { questionId: 47, correctOptionIds: [2] },
  { questionId: 48, correctOptionIds: [1] },
  { questionId: 49, correctOptionIds: [1, 2, 3] },
  { questionId: 50, correctOptionIds: [1] },
  { questionId: 51, correctOptionIds: [2] },
  { questionId: 52, correctOptionIds: [1, 2] },
  { questionId: 53, correctOptionIds: [2] },
  { questionId: 54, correctOptionIds: [2] },
  { questionId: 55, correctOptionIds: [1, 2, 3] },
  { questionId: 56, correctOptionIds: [2] },
  { questionId: 57, correctOptionIds: [1] },
  { questionId: 58, correctOptionIds: [1, 2, 3] },
  { questionId: 59, correctOptionIds: [1] },
  { questionId: 60, correctOptionIds: [1, 2, 3] },
  { questionId: 61, correctOptionIds: [2] },
  { questionId: 62, correctOptionIds: [2] },
  { questionId: 63, correctOptionIds: [1, 2, 3] },
  { questionId: 64, correctOptionIds: [1] },
  { questionId: 65, correctOptionIds: [1] },
  { questionId: 66, correctOptionIds: [1, 2, 3] },
  { questionId: 67, correctOptionIds: [2] },
  { questionId: 68, correctOptionIds: [1] },
  { questionId: 69, correctOptionIds: [1, 2, 3] },
  { questionId: 70, correctOptionIds: [2] }
];

const cssQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...cssQuestions]));
cssQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const cssExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal("css-100"),
  title: signal("CSS — Beginner to Advanced"),
  duration: signal({ hour: 1, minute: 10, second: 0 }),
  questions: cssQuestionsSignal
};

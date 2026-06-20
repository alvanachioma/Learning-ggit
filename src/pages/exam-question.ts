import {Component, signal} from '@angular/core';

@Component({
  selector: 'exam-question',
  template: `
    <div class="flex justify-center mt-3">
      <div class=" bg-gray-200 min-h-[400px] min-w-[600px] p-4 rounded-2xl">
        <div class="flex justify-between">
          <p class="border rounded-3xl border-blue-100 p-1 shadow-2xl text-blue-800">{{ topic().subject }}</p>
          <p class="text-gray-600">{{ topic().question }}</p>
        </div>
    @for (q of questions(); track q) {
      <div class="">
        <h3 class="text-center font-extrabold mt-3">{{ q.title }}</h3>

        <ul class="flex flex-wrap">
          @for (opt of q.options; track opt.id) {
            <li class="">{{alphabetMap[$index]}} - {{ opt.text }}</li>
          }
        </ul>

      </div>

    }
    </div>
    </div>
  `


})
export class ExamQuestion {
  topic = signal({
    subject: "Home Economics",
    question: "Question 22 of 50"
  });
  alphabetMap="ABCDEFG";
  questions=signal([
    {
      title:"What is the safest way to store sharp knives in the kitchen",
      options:[
        {id:1, text: "In soapy water"},
        {id:2, text: "In knife block"},
        {id:3, text: "In Pointed Upward"},
        {id:4, text:"In Under the pillow"}
      ],

    }
  ]);

}

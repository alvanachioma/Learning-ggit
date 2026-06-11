import {Component, signal} from '@angular/core';

@Component({
  selector: 'arr,arr-arr',
  template: `
    <h1 class="mt-4 flex justify-center items-center font-bold">Array Rendering</h1>
    <div>
      <ul>
      @for(fruit of fruits(); track fruit){
        <li>{{ fruit }}</li>
      }
      </ul>

    </div>

  `
})
export class ArrComponent {
  fruits= signal([
    "Apple", "Mango", "Banana", "Watermelon"
  ]);

}
//you cannot use .push to add extra fruits instead you use .set or .update

import {Component, signal} from '@angular/core';

@Component({
  selector: 'arr,arr-arr',
  template: `
    <h1 class="mt-4 flex flex-row justify-center items-center font-bold">Array Rendering</h1>
    <div>
      <ul>
      @for(fruit of fruits(); track fruit){
        <li>{{ fruit }}</li>
      }
      </ul>
      @if(isLoggedIn()){
        <h2>Welcome, {{user.name}}</h2>
      } @else {
      <button>login</button>
      }

    </div>
    <div class="mt-4">
      <select #country (change)="0">
        <option value="NG">Nigeria</option>
        <option value="US">USA</option>
      </select>
      <p>You selected: {{ country.value }}</p>
    </div>

  `
})
export class ArrComponent {
  fruits= signal([
    "Apple", "Mango", "Banana", "Watermelon"
  ]);
  isLoggedIn=signal(false);

  user ={
    name:'John'
}



}
//you cannot use .push to add extra fruits instead you use .set or .update

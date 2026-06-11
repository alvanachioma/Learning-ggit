import {Component, signal} from '@angular/core';
import {ArrComponent} from '../pages/arr';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'obj, obj-obj',
  imports:[ArrComponent],
  template: `

    <div class="flex flex-col justify-center items-center">
      @for(user of users(); track user.id){
        <div>{{ user.name }}</div>

      }
<arr-arr></arr-arr>
    </div>
  `
})
export class ObjComponent {
  users = signal<User[]>([
    { id: 1, name: "Chioma Alvana", email: "chris@gmail.com" },
    { id: 2, name: "Obi John", email: "kate@gmail.com" },
    { id: 3, name: "Ade Micheal", email: "dan@gmail.com" }
  ]);
}

import { Component, } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  template: `

      <div class="flex justify-center items-center space-x-3 mt-4 ">
        <a routerLink="/home" class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Home</a>
        <a routerLink="/obj" class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Obj</a>

      </div>
      <router-outlet></router-outlet>


  `
})
export class App {

}

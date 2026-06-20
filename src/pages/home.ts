import {Component, signal} from '@angular/core';




@Component({
  selector: 'mastering-git',
  imports:[],
  template: `
    <div class="flex flex-col justify-center items-center">
      <div class="text-4xl">{{ title() }}</div>
      <div class="bg-red-400 w-[200px] h-[200px]"></div>


    </div>
  `
})
export class HomeComponent {
  readonly title = signal("Mastering Git Version Control");


}

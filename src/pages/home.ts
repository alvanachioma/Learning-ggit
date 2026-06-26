import {Component, signal} from '@angular/core';
import {StopWatch} from '../shared/stopWatch/StopWatch';




@Component({
  selector: 'mastering-git',
  imports: [
    StopWatch
  ],
  template: `
    <div class="flex flex-col justify-center items-center">
      <div class="text-4xl">{{ title() }}</div>
      @for(st of [0,0,0]; track $index){
        <StopWatch [hour]="$index +1" [startStopWatch]="true" [class]="'bg-red-{{$index+1}}00'">Match Begins</StopWatch>
      }
      <div class="bg-red-400 w-[200px] h-[200px]"></div>


    </div>
  `
})
export class HomeComponent {
  readonly title = signal("Mastering Git Version Control");


}

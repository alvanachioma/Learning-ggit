import {Component,signal} from '@angular/core';

@Component({
  selector: 'grid-practice',
  template: `
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3 bg-green-700 p-4">1</div>
      <div class="col-span-2 bg-green-700 p">2</div>
      <div class="row-span-2 col-span-2 bg-green-700 p">3</div>
    </div>
  `
})
export class GridPracticeComponent {

}

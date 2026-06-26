import {Component, computed, signal, output, input, numberAttribute, effect, linkedSignal} from '@angular/core';

@Component({
  selector: 'StopWatch',
  template: `
    <div class="bg-green-700 bg-linear-to-l to-green-900 from-green-700  uppercase rounded-2xl m-3 font-extrabold  text-white px-4 py-2 min-h-[50px]
        max-w-[350px] flex flex-col items-center justify-center" >
      <span class="text-[15px]">
        <ng-content>
            Hey!
        </ng-content>
      </span>
      <div class="flex flex-col justify-center items-center text-[13px] w-full mt-4">
        <div class="flex justify-around w-full">
          <span>Hr</span>
          <span>Min</span>
          <span>Sec</span>
        </div>
        <p class="text-shadow-sm text-shadow-black text-[2.9rem] -mt-[10px]">{{elapsed()}}</p>
      </div>

    </div>
  `
})
export class StopWatch {
  private readonly CLOCK_SPEED  = 1000;
  private readonly SEC  = 60;

  startStopWatch = input(false);
  hour = input(0, {transform :(x :number) => x > 23 ? 23  :x});
  minute = input(0, {transform :(x :number) =>  x > 59 ? 59 : x});
  second = input(0, {transform :(x :number) => x > 59 ? 59 : x});
  //label = input("");
  onTimerElapsed = output();
  onTimerStarted = output();
  onTimerStopped = output();
  private _calculateCounterInSeconds(){
    return this.hour() * 60 * 60 + this.minute() * 60 + this.second();
  }
  private _internal_counter  = linkedSignal(() => {
    return this._calculateCounterInSeconds();
  });

  protected _second  = computed(() => {
    return this._internal_counter() % this.SEC;
  });
  protected _hour  = computed(() => {
    return Math.floor(this._internal_counter() / (this.SEC * this.SEC));
  });
  protected _minute  = computed(() => {
    let m = Math.floor(this._internal_counter() / this.SEC) ;

    //const m2 =
    return m < 60 ? m : Math.floor(Math.abs(((this._hour() * this.SEC * this.SEC) - this._internal_counter()) / 60)) ;
  });

  protected elapsed  = computed(() => {
    const hr = (this._hour() + "").length > 1 ? this._hour() : "0" + this._hour() ;
    const min = (this._minute() + "").length > 1 ? this._minute() : "0" + this._minute() ;
    const sec = (this._second() + "").length > 1 ? this._second() : "0" + this._second() ;
    return `${hr} : ${min} : ${sec}`;
  });
  constructor() {
    effect(() => {
      if(this.startStopWatch()){
        this.startTimer();
      }
    });
  }
  private clearInterval = -1;
  protected startTimer(): void {
    this.onTimerStarted.emit();
    this.clearInterval  = window.setInterval(() => {
      if(this._internal_counter() <=0 ){
        // Stop timer
        window.clearInterval(this.clearInterval);
        this.onTimerElapsed.emit();
      }
      else{
        this._internal_counter.update(x => x - 1);
      }
    }, this.CLOCK_SPEED);
  }

  stopTimer(){
    // reset the counter
    this._internal_counter.set(0);
    window.clearInterval(this.clearInterval);
    this.onTimerStopped.emit();
    console.log("Timer STopped => ", this.elapsed());


  }

}

import {Component, computed, signal, output, input, numberAttribute, effect, linkedSignal} from '@angular/core';

@Component({
  selector: 'StopWatch',
  template: `
    <div class="bg-red-500 text-[2.5rem] uppercase rounded-2xl m-3 font-extrabold italic text-white px-4 py-2 min-h-[50px] max-w-[350px] flex item-center justify-center" >
      <span>{{elapsed()}}</span>
    </div>
  `
})
export class StopWatch {
  private readonly CLOCK_SPEED  = 1000;
  private readonly SEC  = 60;

  hour = input(0, {transform :(x :number) => x > 23 ? 23  :x});
  minute = input(0, {transform :(x :number) =>  x > 59 ? 59 : x});
  second = input(0, {transform :(x :number) => x > 59 ? 59 : x});

  onTimerElapsed = output();
  onTimerStarted = output();
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

  }

  ngOnInit () {
    this.startTimer();
  }
  protected startTimer(): void {
    this.onTimerStarted.emit();
    const clearInterval  = window.setInterval(() => {
      if(this._internal_counter() <=0 ){
        // Stop timer
        window.clearInterval(clearInterval);
        this.onTimerElapsed.emit();
        this._internal_counter.set(this._calculateCounterInSeconds());
      }
      else{
        this._internal_counter.update(x => x - 1);
      }
    }, this.CLOCK_SPEED);
  }

}

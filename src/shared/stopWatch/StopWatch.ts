import {Component, computed, signal} from '@angular/core';

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
  private _internal_counter  = signal(9000);

  protected second  = computed(() => {
    return this._internal_counter() % this.SEC;
  });
  protected hour  = computed(() => {
    return Math.floor(this._internal_counter() / (this.SEC * this.SEC));
  });
  protected minute  = computed(() => {
    let m = Math.floor(this._internal_counter() / this.SEC) ;

    //const m2 =
    return m < 60 ? m : Math.floor(Math.abs(((this.hour() * this.SEC * this.SEC) - this._internal_counter()) / 60)) ;
  });

  protected elapsed  = computed(() => {
    const hr = (this.hour() + "").length > 1 ? this.hour() : "0" + this.hour() ;
    const min = (this.minute() + "").length > 1 ? this.minute() : "0" + this.minute() ;
    const sec = (this.second() + "").length > 1 ? this.second() : "0" + this.second() ;
    return `${hr} : ${min} : ${sec}`;
  });

  ngOnInit () {
    this.startTimer();
  }
  protected startTimer(): void {

    const clearInterval  = window.setInterval(() => {
      if(this._internal_counter() <=0 ){
        // Stop timer
        window.clearInterval(clearInterval);
      }
      else{
        this._internal_counter.update(x => x - 1);
      }
    }, this.CLOCK_SPEED);
  }

}

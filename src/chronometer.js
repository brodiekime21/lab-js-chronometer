class Chronometer {
  constructor() {
    this.currentTime= 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { //declaring value of interval ID
      this.currentTime = this.currentTime + 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
//   let minutes = 0
//   if (start()=== 60)
// clearInterval(intervalId);
// return minutes++;
  return Math.floor(this.currentTime/60)
  }



  getSeconds() {
  return this.currentTime%60
  }

  computeTwoDigitNumber(value) {

    if (String(value).length <2){
      return `0${value}`
    }
    else {
      return String(value)
    }
  }



  stop() {
    clearInterval(this.intervalId)
  }






  reset() {
this.currentTime = 0
  }

  split() {
let minutes = this.computeTwoDigitNumber(this.getMinutes())
let seconds = this.computeTwoDigitNumber(this.getSeconds())
return `${minutes}:${seconds}`
  }
}

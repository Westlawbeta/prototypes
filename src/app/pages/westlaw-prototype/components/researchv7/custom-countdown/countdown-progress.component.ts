// countdown-progress.component.ts
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-progress',
  templateUrl: './countdown-progress.component.html',
  styleUrls: ['./countdown-progress.component.less']
})
export class CountdownProgressComponent implements OnInit, OnDestroy {

  totalSeconds: number = 20;
  currentSecond: number = 0;
  percentage: number = 0;
  statusMessage: string = '20 seconds';
  startButtonDisabled: boolean = false;

  private timerInterval: any; // Holds the interval ID

  @Output() countdownFinished = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    // Initial update when the component loads
    this.updateProgressBar();
    this.startTimer(); // Automatically start the timer when the component initializes
  }

  ngOnDestroy(): void {
    // Clear the interval if the component is destroyed to prevent memory leaks
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateProgressBar(): void {
    // Calculate the percentage based on the current second
    this.percentage = (this.currentSecond / this.totalSeconds) * 100;

    // Update status message
    if (this.currentSecond === 0) {
      //this.statusMessage = "Timer ready.";
    } else if (this.currentSecond > 0 && this.currentSecond <= this.totalSeconds) {
      this.statusMessage = `${this.totalSeconds - this.currentSecond} seconds`;
      if(this.totalSeconds - this.currentSecond === 0){
        clearInterval(this.timerInterval); // Stop the interval
        this.startButtonDisabled = false; // Re-enable the button
        this.countdownFinished.emit(); // New: Emit the event when finished
      }
    } else if (this.currentSecond > this.totalSeconds) {
      //this.statusMessage = "Timer finished!";
      clearInterval(this.timerInterval); // Stop the interval
      this.startButtonDisabled = false; // Re-enable the button
      this.countdownFinished.emit(); // New: Emit the event when finished
    }else{
    }
  }

  startTimer(): void {
    // Reset values
    this.currentSecond = 0;
    this.updateProgressBar(); // Initialize to 0%
    this.startButtonDisabled = true; // Disable button to prevent multiple clicks

    this.timerInterval = setInterval(() => {
      this.currentSecond++;
      this.updateProgressBar();

      if (this.currentSecond >= this.totalSeconds) {
        // Allow one more update for 100% and then clear
        clearInterval(this.timerInterval);
        // this.statusMessage = "Timer finished!";
        this.startButtonDisabled = false; // Re-enable the button
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
  }
}
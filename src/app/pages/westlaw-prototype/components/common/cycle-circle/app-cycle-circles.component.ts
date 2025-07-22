import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cycling-circles',
  template: `
    <div class="circle-container">
      <div
        *ngFor="let circle of circles; let i = index"
        class="circle"
        [ngClass]="{ 'active': i === currentIndex }"
      ></div>
    </div>
  `,
  styles: [`
    /* Custom CSS for the circles and animation */
    :host {
      display: block;
        background-color: transparent;
        width: 20px;
        position: relative;
        float: left;
        top: 10px;
        margin-right: 10px;
    }

    .circle-container {
      display: flex;
      gap: 4px; /* Tailwind's gap-5 (20px) */
    }

    .circle {
      width: 4px;  /* 50px */
      height: 4px; /* 50px */
      border-radius: 9999px; /* Tailwind's rounded-full */
      background-color: #FFA500; /* Original Orange */
      transition: background-color 0.5s ease-in-out; /* Smooth transition for color change */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    .circle.active {
      background-color: #CC8400; /* Darker Orange */
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* More pronounced shadow when active */
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .circle {
        width: 2.5rem;  /* Smaller on small screens (40px) */
        height: 2.5rem; /* Smaller on small screens (40px) */
      }
      .circle-container {
        gap: 0.75rem; /* Smaller gap on small screens (12px) */
      }
    }
  `]
})
export class CyclingCirclesComponent implements OnInit, OnDestroy {
  circles: any[] = new Array(3); // Array to represent the three circles
  currentIndex: number = 0;
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    // Start the cycling animation when the component initializes
    this.startCycling();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    this.stopCycling();
  }

  /**
   * Starts the interval for cycling colors.
   */
  startCycling(): void {
    // Call cycleColors immediately to set the initial state
    this.cycleColors();
    // Set an interval to call cycleColors every 1000ms (1 second)
    this.intervalId = setInterval(() => {
      this.cycleColors();
    }, 1000); // Adjust this value to change the speed of cycling
  }

  /**
   * Stops the interval for cycling colors.
   */
  stopCycling(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Updates the currentIndex to highlight the next circle in the sequence.
   */
  cycleColors(): void {
    // Increment currentIndex and use modulo to loop back to the start
    // when the end of the circles array is reached.
    this.currentIndex = (this.currentIndex + 1) % this.circles.length;
  }
}
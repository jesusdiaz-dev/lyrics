import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

// Define the minimum distance (in pixels) the finger must travel for a move to count as a swipe
const MIN_SWIPE_DISTANCE = 50; 

// Define the maximum duration (in milliseconds) the touch event can last
const MAX_SWIPE_TIME = 300; 

@Directive({
  selector: '[appSwipe]',
  standalone: true // Use standalone for modern Angular
})
export class SwipeDirective {
  // Output events that the host component can listen to
  @Output('swipeleft') swipeLeft = new EventEmitter<void>();
  @Output('swiperight') swipeRight = new EventEmitter<void>();

  // Variables to track the touch start
  private touchStartTime: number = 0;
  private touchStartX: number = 0;

  constructor(private el: ElementRef) {}

  /**
   * Listen for the initial touch event (finger down)
   */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    // Record the time and the initial horizontal position (X-coordinate)
    this.touchStartTime = Date.now();
    this.touchStartX = event.changedTouches[0].clientX;
  }

  /**
   * Listen for the touch end event (finger up)
   */
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    const touchEndTime = Date.now();
    
    // Check if the gesture was too long (to differentiate swipe from a long press)
    if (touchEndTime - this.touchStartTime > MAX_SWIPE_TIME) {
      return; 
    }

    const touchEndX = event.changedTouches[0].clientX;
    const distanceX = touchEndX - this.touchStartX;

    // Check if the distance traveled meets the minimum threshold
    if (Math.abs(distanceX) > MIN_SWIPE_DISTANCE) {
      if (distanceX > 0) {
        // Positive distance means movement from left to right (Swipe Right)
        this.swipeRight.emit();
      } else {
        // Negative distance means movement from right to left (Swipe Left)
        this.swipeLeft.emit();
      }
    }
    // 
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  title = 'Flight Booking App HZ';
  index = 0;

  constructor() {
    const lsTest = localStorage.getItem('test')
    if (lsTest) this.title = lsTest;
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('yes!!!!');
      
    }, 4000)
  }

  testClick() {
    this.index++;
  }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  roomNumber!: number;
  availabilityMessage!: string;
  num1: number=4;
   checkAvailability() {
    // For simplicity, we assume the room is always available if the room number is provided
    if (this.roomNumber < this.num1) {
      this.availabilityMessage = 'Room is not available';
     
    } else {
      this.availabilityMessage = 'Room is available';
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = 'Sagar Dwivedi';
  occupation: string = 'Web Developer';
  description: string = 'In a realm where ideas collide and imagination soars, prepare to embark on an exhilarating journey through the tapestry of words and possibilities. Welcome to a world where the extraordinary becomes reality.';

}

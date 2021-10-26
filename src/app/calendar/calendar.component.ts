import { Component, OnInit } from '@angular/core';

// Есть смысл посмотреть готовые календари, но можешь попробовать разобраться с логикой самому, это большой труд
// стилизовать существующие не самая большая проблема, как написать логику с нуля чтобы всё отрабатывало
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

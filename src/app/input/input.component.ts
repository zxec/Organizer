import { Component, OnInit } from '@angular/core';

// имя компонента не совпадает с его целью, по сути это виджет task-form/task-edit, никак не app-input
// app-input больше подходит компоненту формы, если требуется кастомный контрол формы
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

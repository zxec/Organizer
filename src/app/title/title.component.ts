import { Component, OnInit } from '@angular/core';

// этот компонент лишний, он не делает ничего полезного
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

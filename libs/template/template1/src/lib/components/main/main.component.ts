/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  typesOfShoes = [
    {
      "name": "Create user",
      "route": "user-mgt/create"
    }, {
      name: "List User",
      route: "user-mgt/list"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }


}

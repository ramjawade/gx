/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import type { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'gx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  /**
   * Value of input
   */
  @Input() value: number | string = "";

  /**
   * Mat appearance of input
   */
  @Input() appearance: MatFormFieldAppearance = "outline";


  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';

type ButtonType = 'raised' | 'stroked' | 'flat' | 'fab' | 'mini-fab' | 'icon' | 'basic';

@Component({
  selector: 'gx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.mat-raised-button]': 'flag'
  }

})
export class ButtonComponent implements OnInit {

  /**
   * Button Theme
   */
  @Input() theme: ThemePalette = "primary";

  /**
   * Disable Button
   */
  @Input() disabled = false;

  /**
   * Button Title 
   */
  @Input() title = "";

  /**
   * Button Type
   */
  @Input() type: ButtonType = 'raised'

  /**
   * Button Value
   */
  @Input() value = ""

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

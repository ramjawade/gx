/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';
import { IconComponent } from '../../../icon';

type ButtonType = 'raised' | 'stroked' | 'flat' | 'fab' | 'mini-fab' | 'icon' | 'basic';

@Component({
  selector: 'gx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.mat-raised-button]': 'flag'
  },
  changeDetection: ChangeDetectionStrategy.OnPush

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

  @Input() iconTemplate: TemplateRef<IconComponent>;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

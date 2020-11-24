/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'gx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() fontIcon: string = null;

  @Input() fontSet = 'icomon';

  @Input() theme: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}

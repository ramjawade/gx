/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'gx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolbarComponent implements OnInit {

  @Input() theme: ThemePalette = null;

  constructor() { }

  ngOnInit(): void {
  }

}

/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() fontIcon: string = null;

  @Input() fontSet = 'icomon';

  @Input() svgPath = "";

  @Input() theme: ThemePalette = 'primary';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (this.svgPath) {
      this.iconRegistry.addSvgIconLiteral(this.fontIcon, this.sanitizer.bypassSecurityTrustHtml(this.svgPath));
    }
  }

}

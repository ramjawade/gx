/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'gx-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerComponent implements OnInit {

  @ViewChild(MatDrawer) drawer: MatDrawer;

  @Input() hasBackdrop = false;

  @Input() mode: MatDrawerMode = 'side';

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  open() {
    this.drawer.open();
  }

  toggle() {
    this.drawer.toggle();
    this.cdr.markForCheck();
  }
}

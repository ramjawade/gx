import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MatSidenavModule } from "@angular/material/sidenav";


@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }

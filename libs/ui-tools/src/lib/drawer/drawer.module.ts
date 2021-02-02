import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }

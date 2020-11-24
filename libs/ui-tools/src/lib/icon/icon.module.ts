import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [IconComponent]
})
export class IconModule { }

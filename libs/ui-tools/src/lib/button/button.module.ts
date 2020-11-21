import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }

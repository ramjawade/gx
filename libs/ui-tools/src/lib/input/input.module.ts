import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "./components/input/input.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }

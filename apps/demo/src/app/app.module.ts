import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, DrawerModule, IconModule, InputModule, ToolbarModule } from "@gx/ui-tools";
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, InputModule, DrawerModule, ToolbarModule, ButtonModule, IconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

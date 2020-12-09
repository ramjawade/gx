import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, DrawerModule, IconModule, InputModule, ToolbarModule } from "@gx/ui-tools";
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputModule,
    DrawerModule,
    ToolbarModule,
    ButtonModule,
    IconModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

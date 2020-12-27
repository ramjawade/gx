import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "@gx/core";
import { UiToolsModule } from "@gx/ui-tools";
import { ThemeModule } from "@gx/theme";
import { MainComponent } from './components/main/main.component';
import { MatListModule } from '@angular/material/list';
// gx
import { ButtonModule, DrawerModule, IconModule, InputModule, ToolbarModule } from "@gx/ui-tools";
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiToolsModule,
    ThemeModule,
    ButtonModule,
    DrawerModule,
    IconModule,
    InputModule,
    ToolbarModule,
    MatListModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [MainComponent],
  exports: [
    MainComponent
  ]
})
export class Template1Module { }

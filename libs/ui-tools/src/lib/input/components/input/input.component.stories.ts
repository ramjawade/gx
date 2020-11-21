import { text } from '@storybook/addon-knobs';
import { InputModule } from '../../input.module';
import { InputComponent } from './input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'Input',
  component: InputComponent,
  parameters: {
    docs: {}
  },
}

export const primary = () => ({
  moduleMetadata: {
    imports: [InputModule, BrowserAnimationsModule, BrowserModule]
  },
  component: InputComponent,
  props: {
    value: text('value', "ABC"),
    appearance: text('appearance', "outline"),
  }
})


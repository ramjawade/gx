import { text, boolean } from '@storybook/addon-knobs';
import { ButtonModule } from '../../button.module';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ButtonModule]
  },
  component: ButtonComponent,
  props: {
    theme: text('theme', "primary"),
    disabled: boolean('disabled', false),
    title: text('title', ""),
    type: text('type', 'raised'),
    value: text('value', "Submit"),
  }
})
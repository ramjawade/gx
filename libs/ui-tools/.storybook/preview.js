import { addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from './../../../documentation.json';
addDecorator(withKnobs);
setCompodocJson(docJson);

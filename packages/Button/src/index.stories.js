// ReferenceDrawer.stories.js|jsx

import React from 'react';

import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

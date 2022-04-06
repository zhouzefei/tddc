import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';
import theme from "./theme";

addons.setConfig({
  theme: theme //create({ colorPrimary: 'hotpink', colorSecondary: '#146bfb' }),
});
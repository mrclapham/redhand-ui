import base from './tailwindConfig/tailwind.base.config';
import plugins from './tw-plugins/theme-plugin';
import theme from './tailwindConfig/tailwind.theme.light.config';

export default {
  ...base,
  plugins: [
    plugins
  ],
  theme
}

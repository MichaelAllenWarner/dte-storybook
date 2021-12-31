/*
  `import` (instead of `require`) needed for drupal-twig-extensions 1.0.0-alpha.6,
  but `npm run storybook` results in:

  `SyntaxError: Cannot use import statement outside a module`.

  I've also tried dynamic `import()` calls, including wrapping everything
  in an async IIFE, but that errors out too.

  As far as I can tell, drupal-twig-extensions 1.0.0-alpha.6 is incompatible
  with this Storybook / Webpack 5 setup.
*/

import {
  TwingEnvironment,
  TwingLoaderRelativeFilesystem,
} from 'twing';
import { addDrupalExtensions } from 'drupal-twig-extensions/twing';

const twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
  { autoescape: false }
);

addDrupalExtensions(twing);

// I think could be `module.exports = { default: twing }` if needed?
export default twing;
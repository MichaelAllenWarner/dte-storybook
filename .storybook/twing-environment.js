const {
  TwingEnvironment,
  TwingLoaderRelativeFilesystem,
} = require('twing');
const { addDrupalExtensions } = require('drupal-twig-extensions/twing');

const twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
  { autoescape: false }
);

addDrupalExtensions(twing);

module.exports = twing;
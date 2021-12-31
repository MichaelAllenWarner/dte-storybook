const {
  TwingEnvironment,
  TwingLoaderRelativeFilesystem,
  TwingFunction,
  TwingFilter
} = require('twing');
const { addDrupalExtensions } = require('drupal-twig-extensions/twing');
const url = require('url');

const twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
  { autoescape: false }
);

addDrupalExtensions(twing);

// API: https://nightlycommit.github.io/twing/advanced.html

twing.addFunction(new TwingFunction('children', () => []));

twing.addFunction(new TwingFunction(
  'icon',
  name => `<img src="http://place-hold.it/18x18" alt="placeholder for ${name} icon">`
));

// Check for a Drupal render array, never true in Storybook.
twing.addFunction(new TwingFunction('is_render_array', () => false));

// Menu function to determine whether the current item is the current page.
twing.addFunction(new TwingFunction(
  'active_and_no_active_below',
  item => item?.is_current
));

/**
 * $components = parse_url($url);
 *   $host_pieces = explode('.', $components['host']);
 *   return $host_pieces[count($host_pieces) - 2];
 */
twing.addFilter(new TwingFilter(
  'matchsocial',
  str => {
    if (str) {
      const u = url.parse(str, true);
      if (u.hostname) {
        const host_pieces = u.hostname.split('.');
        return host_pieces[host_pieces.length - 2];
      }
    }
    return false;
  }
));

/**
 * Mock https://twig-extensions.readthedocs.io/en/latest/intl.html#localizeddate
 */
twing.addFilter(new TwingFilter(
  'localizeddate',
  str => {
    const d = new Date(str * 1000);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleString(undefined, options);
  }
));

twing.addFilter(new TwingFilter('nocomment', s => s));

module.exports = twing;
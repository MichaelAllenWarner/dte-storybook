import ExampleTwig from './Example.twig';
import DrupalAttribute from '../../DrupalAttribute';

export default { title: 'Example' };

export const Example = (_, { loaded: { renderedStory } }) => renderedStory;

Example.render = ExampleTwig;

Example.args = {
  attributes: new DrupalAttribute()
};
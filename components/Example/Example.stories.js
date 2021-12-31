import ExampleTwig from './Example.twig';

export default { title: 'Example' };

export const Example = (_, { loaded: { renderedStory } }) => renderedStory;

Example.render = ExampleTwig;
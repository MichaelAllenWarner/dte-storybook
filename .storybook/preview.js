export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const renderedStory = await originalStoryFn.render(args);
      return { renderedStory };
    }
  },
];
import React from 'react';

const style = {
  wrapper: {
    minHeight: '100vh',
    width: '100vw',
    padding: '40px',
    backgroundColor: '#fff',
    backgroundImage: `linear-gradient(#eee 2px, transparent 2px),
      linear-gradient(90deg, #eee 2px, transparent 2px),
      linear-gradient(#eee 1px, transparent 1px),
      linear-gradient(90deg, #eee 1px, transparent 1px)`,
    backgroundSize: '100px 100px, 100px 100px, 10px 10px, 10px 10px',
    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
  },
};

export const StoryWrapper = storyFn => (
  <div style={style.wrapper}>
    { storyFn() }
  </div>
);

// When you add new images, import them and update getExperimentalColumns.
// Columns = left | center | right stacks. Put tall pieces + overflow in the third column if you like.


import weirdart from '../assets/projects/experimental/Weirdart GIF-downsized.gif'
import animatedLarge from '../assets/projects/experimental/Animated GIF-downsized_large.gif'
import earlyAbstract from '../assets/projects/experimental/early_abstract.gif'

/** Explicit 3-column layout — avoids CSS multi-column balancing issues. */
export const getExperimentalColumns = () => [
  [weirdart],
  [earlyAbstract],
  [animatedLarge],
]

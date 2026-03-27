// When you add new images, import them and update getAllExperimental + getExperimentalColumns.
// Columns = left | center | right stacks. Put tall pieces + overflow in the third column if you like.

import disaster from '../assets/projects/experimental/disaster.jpg'
import weirdart from '../assets/projects/experimental/Weirdart GIF-downsized.gif'
import animatedLarge from '../assets/projects/experimental/Animated GIF-downsized_large.gif'
import earlyAbstract from '../assets/projects/experimental/early_abstract.gif'

/** Flat list (e.g. counts). Order: left col top→bottom, then center, then right. */
export const getAllExperimental = () => [
  weirdart,
  earlyAbstract,
  animatedLarge,
  disaster,
]

/** Explicit 3-column layout — avoids CSS multi-column balancing issues. */
export const getExperimentalColumns = () => [
  [weirdart, disaster],
  [earlyAbstract],
  [animatedLarge],
]

export const getExperimentalCount = () => getAllExperimental().length

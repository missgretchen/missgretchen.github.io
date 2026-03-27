// Utility to load all painting images dynamically
// When you add new images to the paintings folder, just add them to this array

// Import all painting images
import squares from '../assets/projects/paintings/squares.jpeg';
import jazz from '../assets/projects/paintings/jazz.jpeg';
import blueRoses from '../assets/projects/paintings/blue_roses.jpg'
import colorfulBrooklyn from '../assets/projects/paintings/colorful_brooklyn.jpg'
import flowerVase from '../assets/projects/paintings/flower_vase.jpg'
import marionette from '../assets/projects/paintings/marionette.jpeg'
import prettyLady from '../assets/projects/paintings/pretty_lady.jpeg'
import stoicMan from '../assets/projects/paintings/stoic_man.jpeg'
import tokyo from '../assets/projects/paintings/tokyo.jpg'

// Array of all painting images - add new imports above and include them here
export const getAllPaintings = () => {
  return [
    squares,
    prettyLady,
    stoicMan,
    tokyo,
    colorfulBrooklyn,
    marionette,
    jazz,
    flowerVase,
    blueRoses,
  ]
}

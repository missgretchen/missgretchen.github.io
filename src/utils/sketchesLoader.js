// Utility to load all sketch images dynamically
// When you add new images to the sketches folder, just add them to this array

// Import all sketch images
import brooklyn from '../assets/projects/sketches/brooklyn.jpg';
import circles from '../assets/projects/sketches/circles.jpg';
import fungus from '../assets/projects/sketches/fungus.jpg';
import greenBuilding from '../assets/projects/sketches/green_building.jpg';
import pushWall from '../assets/projects/sketches/push_wall.jpeg';
import sittingWoman from '../assets/projects/sketches/sitting_woman.jpeg';
import sketchyHand from '../assets/projects/sketches/sketchy_hand.jpg';

// Array of all sketch images - add new imports above and include them here
export const getAllSketches = () => {
  return [
    brooklyn,
    circles,
    fungus,
    greenBuilding,
    pushWall,
    sittingWoman,
    sketchyHand,
  ]
}

// Helper function to get sketch count
export const getSketchCount = () => {
  return getAllSketches().length
}

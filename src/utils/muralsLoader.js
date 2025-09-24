// Utility to load all mural images dynamically
// When you add new images to the murals folder, just add them to this array

// Import all mural images
import albumDoor from '../assets/projects/murals/album_door.jpg';
import brainCity from '../assets/projects/murals/brain_city.jpg';
import cardHandEatMe from '../assets/projects/murals/card_hand_eat_me.jpg';
import modeselektor1 from '../assets/projects/murals/modeselektor_1.jpg';
import modeselektor2 from '../assets/projects/murals/modeselektor_2.jpg';
import twoWomen from '../assets/projects/murals/two_women.jpg';

// Array of all mural images - add new imports above and include them here
export const getAllMurals = () => {
  return [
    albumDoor,
    cardHandEatMe,
    modeselektor1,
    twoWomen,
    brainCity,
    modeselektor2,
  ]
}

// Helper function to get mural count
export const getMuralCount = () => {
  return getAllMurals().length
}

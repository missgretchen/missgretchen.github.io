# Paintings Gallery

This folder contains all the painting images that are automatically displayed on the Paintings page.

## Adding New Paintings

To add a new painting to the gallery:

1. Add your image file to this folder (`src/assets/projects/paintings/`)
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`
3. Update the `paintingsLoader.js` file in `src/utils/`:
   - Add an import statement for your new image
   - Add the imported image to the array in the `getAllPaintings()` function

### Example:
If you add `new_painting.jpg`:

1. Add to `src/utils/paintingsLoader.js`:
```javascript
import newPainting from '../assets/projects/paintings/new_painting.jpg'

export const getAllPaintings = () => {
  return [
    // ... existing paintings
    newPainting
  ]
}
```

The painting will automatically appear in the gallery with glassmorphism styling and responsive layout!

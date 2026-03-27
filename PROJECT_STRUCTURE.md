# Portfolio Website Structure

## Pages and Routing

The portfolio website now includes the following routes:

### Main Pages
- `/` - Home page (original portfolio content)
- `/code` - Code projects
- `/papers` - Research papers
- `/creative-writing` - Articles, poems, short stories
- `/art` - Main art portfolio page

### Art Portfolio Subsections
- `/art/sketches` - Sketches and drawings
- `/art/paintings` - Paintings and painted works
- `/art/collabs` - Collaborative art projects
- `/art/experimental` - Experimental and mixed-media works

## Navigation

The site features a dropdown menu in the header with the following structure:

### Projects Dropdown
- **Code**
  - View Projects
- **Papers**
  - Research Papers
- **Creative Writing**
  - Articles & Stories
- **Art Portfolio**
  - Sketches
  - Paintings
  - Collaborations
  - Experimental

## Asset Folders

Project assets are organized in `/public/projects/` with the following structure:

```
public/projects/
├── code/                    # Code project assets
├── papers/                  # Research paper PDFs
├── creative-writing/        # Articles, poems, stories
└── art/
    ├── sketches/           # Sketch images
    ├── paintings/          # Painting images
    ├── collabs/            # Collaborative project assets
    └── experimental/       # Experimental work assets
```

## Components

- `Navigation.jsx` - Header with dropdown menu and breadcrumb navigation
- `Portfolio.jsx` - Original home page content (now with integrated navigation)
- All page components maintain the same visual design and cloud background

## Usage

1. Run `npm run dev` to start the development server
2. Navigate to different sections using the dropdown menu
3. Add your project assets to the corresponding folders in `/public/projects/`
4. Update the individual page components to display your content

The structure is ready for you to add your actual projects, images, and documents!

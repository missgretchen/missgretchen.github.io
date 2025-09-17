# Gretchen Eggers - Portfolio Website

A modern, responsive single-page portfolio website built with React. This website serves as both a professional showcase and a gallery for creative projects.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Social Integration**: Direct links to GitHub, Instagram, and LinkedIn with custom icons
- **Resume Download**: Easy-to-access resume download functionality
- **Future-Ready**: Structure in place for adding project showcases later

## Customization

### Replacing the Profile Image
To replace the placeholder profile image with the actual headshot:
1. Add your headshot image to the `/public` folder (recommended: `headshot.jpg` or `headshot.png`)
2. Update the `src` attribute in `src/App.js` from `/initials.png` to `/headshot.jpg` (or your image filename)

### Adding Resume Download
To enable actual resume download:
1. Add your resume PDF to the `/public` folder (e.g., `Gretchen_Eggers_Resume.pdf`)
2. Update the `handleResumeDownload` function in `src/App.js` to point to your resume file

### Future Enhancements
The portfolio is structured to easily add:
- Project showcase sections
- Skills and experience details
- Contact form
- Blog or updates section

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Tech Stack

- React 18
- CSS3 with modern features (Grid, Flexbox, CSS Variables)
- Material Symbols for icons
- Responsive design principles

---

**Live Site**: [gretcheneggers.io](http://gretcheneggers.io/)
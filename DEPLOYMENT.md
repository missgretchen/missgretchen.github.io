# Deployment Instructions for Gretchen's Portfolio

This document contains instructions for deploying the portfolio website to GitHub Pages.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git configured with your GitHub credentials

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test the build locally:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify the build works correctly** by visiting the preview URL (usually `http://localhost:4173`)

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment:

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **The GitHub Action will automatically:**
   - Build the project
   - Deploy to GitHub Pages
   - Make it available at `https://gretcheneggers.io` (custom domain)

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

## Custom Domain Setup

The custom domain `gretcheneggers.io` is already configured:

1. **CNAME file is set up** in `public/CNAME` with your domain
2. **GitHub Actions workflow** automatically handles the custom domain deployment
3. **Configure your domain DNS:**
   - Add a CNAME record pointing `gretcheneggers.io` to `missgretchen.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. **Enable custom domain in GitHub Pages settings:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter `gretcheneggers.io`
   - Check "Enforce HTTPS"

## Development Workflow

### Local Development
```bash
npm run dev
```
This starts the development server at `http://localhost:5173`

### Making Changes
1. Edit files in the `src/` directory
2. Test changes locally with `npm run dev`
3. Build and test with `npm run build && npm run preview`
4. Commit and push to trigger automatic deployment

### File Structure
```
├── src/
│   ├── components/
│   │   ├── Portfolio.jsx      # Main portfolio component
│   │   └── Portfolio.css      # Portfolio styles
│   ├── App.jsx               # App component
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/
│   ├── Headshot.jpg          # Profile image
│   └── resume.pdf            # Resume file
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions workflow
└── vite.config.js            # Vite configuration
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall if needed: `rm -rf node_modules && npm install`
- Check for TypeScript/ESLint errors: `npm run lint`

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions tab for deployment logs
- Ensure the main branch is set as the source in Pages settings

### Custom Domain Issues
- Verify DNS propagation (can take up to 24 hours)
- Check that CNAME file is in the public directory
- Ensure HTTPS is enabled in GitHub Pages settings

## Updating Content

### Profile Image
Replace `public/Headshot.jpg` with your new image (keep the same filename)

### Resume
Replace `public/resume.pdf` with your updated resume (keep the same filename)

### About Me Text
Edit the `about-text` content in `src/components/Portfolio.jsx`

### Social Links
Update the `socialLinks` array in `src/components/Portfolio.jsx`

### Styling
Modify `src/components/Portfolio.css` for design changes

## Performance Tips

- Optimize images before adding them to the public folder
- Use WebP format for better compression
- Keep the bundle size small by avoiding unnecessary dependencies
- Test the site on mobile devices

## Security Notes

- Never commit sensitive information (API keys, passwords, etc.)
- Use environment variables for any configuration that shouldn't be public
- Regularly update dependencies to patch security vulnerabilities

---

**Last Updated:** December 2024
**Maintained by:** Gretchen Eggers

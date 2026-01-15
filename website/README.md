# Special Kids Learning Center - Website

A warm, parent-friendly website for the Special Kids Learning & Development Center in Gorakhpur, India.

## Overview

This is a static HTML/CSS/JS website designed for easy deployment on Netlify. It features:

- **Single-page design** with smooth scrolling navigation
- **Mobile-first responsive** layout
- **5 program sections** with detailed modals
- **FAQ accordion** for common questions
- **WhatsApp integration** for easy parent contact
- **Warm, non-clinical aesthetic** appropriate for the target audience

## Project Structure

```
website/
├── index.html          # Main single-page website
├── css/
│   └── styles.css      # All styling with CSS variables
├── js/
│   └── main.js         # Navigation, modals, accordions, animations
├── images/
│   └── placeholder.txt # Guide for adding images
├── resources/          # For downloadable PDFs (future)
└── README.md           # This file
```

## Quick Start (Local Development)

1. **Open locally:**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

2. **View in browser:**
   - Navigate to `http://localhost:8000`

## Deploying to Netlify

### Option 1: Drag and Drop (Easiest)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `website` folder onto the page
3. Your site is live! Netlify will give you a URL like `random-name.netlify.app`

### Option 2: Connect to Git Repository

1. Push this code to a GitHub/GitLab repository
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Set build settings:
   - **Base directory:** `website`
   - **Build command:** (leave empty)
   - **Publish directory:** `website`
6. Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   cd website
   netlify deploy --prod
   ```

## Custom Domain Setup

After deploying to Netlify:

1. Go to your site's **Domain settings**
2. Click **Add custom domain**
3. Enter your domain (e.g., `specialkidslearning.com`)
4. Follow Netlify's DNS instructions to point your domain

## Configuration Checklist

Before going live, update these items:

### Contact Information
In `index.html`, replace placeholder contact info:

- [ ] Phone number: Replace `919999999999` with actual number
- [ ] WhatsApp number: Replace in all `wa.me` links
- [ ] Email: Replace `hello@specialkidslearning.com`
- [ ] Address: Replace `[Your Address]` with actual address

### Google Maps
Replace the map placeholder with an actual embed:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the `.map-placeholder` div with the iframe

### Images
Add real images to the `images/` folder:

- [ ] Logo
- [ ] Favicon
- [ ] Team photos
- [ ] Center photos
- [ ] Activity photos

See `images/placeholder.txt` for detailed guidelines.

### Analytics (Optional)
Add Google Analytics:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add the tracking code before `</head>` in `index.html`

### SEO
In `index.html`, update:

- [ ] Page title
- [ ] Meta description
- [ ] Keywords
- [ ] Open Graph tags (for social sharing)

## Customization

### Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #3D9A8B;      /* Main teal color */
    --color-secondary: #E8A598;     /* Coral accent */
    --color-accent: #F4C759;        /* Yellow highlight */
    /* ... more colors */
}
```

### Fonts
Fonts are loaded from Google Fonts. To change:

1. Update the `<link>` in `index.html`
2. Update `--font-heading` and `--font-body` in CSS

### Content
All content is in `index.html`. Edit directly:

- Program details are in the modal sections
- FAQ answers are in the accordion items
- Team information is in the team section

## Browser Support

Tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Tips

1. **Optimize images** before uploading (use TinyPNG or Squoosh)
2. **Enable gzip** compression (automatic on Netlify)
3. **Use WebP** format for images where supported
4. **Lazy load** images below the fold

## Troubleshooting

### Modals not working
- Check browser console for JavaScript errors
- Ensure `main.js` is loading correctly

### Styles not updating
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache

### Mobile menu not working
- Check if JavaScript is enabled
- Check for console errors

## Support

For technical issues with this website, contact:
- [Your developer contact info]

For business inquiries:
- Phone: [Your phone number]
- Email: [Your email]

## License

This website is created for Special Kids Learning & Development Center, Gorakhpur.
All rights reserved.

---

**Made with ❤️ for children who learn differently**


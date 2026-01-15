# Special Kids Learning Center - Digital Program Booklet

A comprehensive digital booklet showcasing all 5 programs offered by the Special Kids Learning & Development Center, including detailed 6-month calendars, schedules, and add-on services.

## 📁 File Structure

```
booklet/
├── index.html          # Main booklet (27 pages)
├── css/
│   ├── booklet-screen.css   # Screen-optimized styles
│   └── booklet-print.css    # Print/PDF-optimized styles
├── js/
│   └── booklet.js           # Interactive features
├── images/
│   └── (add your images here)
└── README.md
```

## 📖 Booklet Contents

### Pages Overview

1. **Cover Page** - Professional center branding
2. **Welcome Letter** - Personal message to parents
3. **About Our Center** - Mission, pillars, and differentiators
4-6. **Little Talkers Program** - Overview, 6-month calendar, weekly schedule, outcomes
7-10. **Ready, Set, School!** - Pre-academic readiness program
11-14. **Focus Champions** - Attention and self-regulation program
15-18. **Social Stars** - Social communication program
19-22. **Learning Launchpad** - Academic skills program
23-24. **Add-On Services** - Additional therapy options with pricing
25. **Enrollment Process** - Step-by-step guide
26. **FAQ** - Common parent questions
27. **Contact Information** - How to reach us
28. **Back Cover** - Closing message

### Programs Included

| Program | Age Group | Focus |
|---------|-----------|-------|
| Little Talkers 🗣️ | 2-4 years | Speech & language development |
| Ready, Set, School! 🎒 | 4-6 years | School readiness skills |
| Focus Champions 🎯 | 5-8 years | Attention & self-regulation |
| Social Stars ⭐ | 4-7 years | Social communication |
| Learning Launchpad 🚀 | 6-10 years | Academic foundations |

## 🖥️ Viewing the Booklet

### Option 1: Direct Browser Open
Simply double-click `index.html` to open in your default browser.

### Option 2: Local Server (Recommended)
```bash
# Navigate to the booklet directory
cd /Users/priyam_ps/Desktop/Experiments/Learning_Center/booklet

# Start a local server
python3 -m http.server 8001

# Open in browser
# http://localhost:8001
```

## 📄 Generating PDF

### Method 1: Browser Print (Recommended)

1. Open the booklet in Chrome or Edge (best PDF support)
2. Click the **"📄 Save as PDF"** button in the bottom navigation
3. In the print dialog:
   - **Destination:** Save as PDF
   - **Layout:** Portrait
   - **Margins:** None (for full-page coverage)
   - **Background graphics:** ✅ Enabled (important for colors)
   - **Scale:** Default (100%)
4. Click **Save**

### Method 2: Using Chrome DevTools

1. Open Chrome DevTools (F12)
2. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
3. Type "Capture full size screenshot" and select it
4. This creates a PNG of the entire page

### Method 3: Using wkhtmltopdf (Command Line)

```bash
# Install wkhtmltopdf
brew install wkhtmltopdf  # macOS
# or
sudo apt-get install wkhtmltopdf  # Ubuntu

# Generate PDF
wkhtmltopdf --enable-local-file-access \
  --print-media-type \
  --page-size A4 \
  --margin-top 0 \
  --margin-right 0 \
  --margin-bottom 0 \
  --margin-left 0 \
  index.html booklet.pdf
```

### Method 4: Using Puppeteer (Node.js)

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///path/to/booklet/index.html', {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: 'booklet.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
})();
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` or `↑` | Previous page |
| `→` or `↓` | Next page |

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/booklet-screen.css`:

```css
:root {
    --color-primary: #3D9A8B;        /* Main brand color */
    --color-secondary: #E8A598;      /* Accent color */
    --color-accent: #F4C759;         /* Highlight color */
    /* ... more variables */
}
```

### Adding Your Logo
Replace the text logo with an image:

```html
<img src="images/logo.png" alt="Logo" class="cover-logo">
```

### Updating Contact Information
Search for placeholder text like:
- `+91 99999 99999` → Replace with actual phone
- `hello@specialkidslearning.com` → Replace with actual email
- `[Your Complete Address]` → Replace with actual address

## 📱 Responsive Design

The booklet is optimized for:
- 🖥️ **Desktop:** Full multi-column layouts
- 📱 **Tablet:** Adjusted grid layouts
- 📱 **Mobile:** Single-column, touch-friendly

## 🖨️ Print Optimization

The print stylesheet (`booklet-print.css`) handles:
- Page breaks between sections
- Color-accurate backgrounds
- Hidden navigation elements
- Optimized typography for print
- A4 page size formatting

## 🔧 Troubleshooting

### Colors not showing in PDF?
- Enable "Background graphics" in print settings
- Use Chrome or Edge for best results

### Text getting cut off?
- Adjust margins in print settings
- Try "Scale: Fit to page"

### Fonts not loading?
- Ensure internet connection for Google Fonts
- Or download fonts locally

## 📞 Support

For questions about the booklet or programs:
- **WhatsApp:** +91 99999 99999
- **Email:** hello@specialkidslearning.com

---

**Special Kids Learning & Development Center**  
*Nurturing Potential, Building Futures*  
Gorakhpur, Uttar Pradesh

© 2026 All Rights Reserved


# Great South Run 2026 Campaign Page

A high-energy, modern fundraising campaign page for your Great South Run challenge benefiting rural Nepal communities.

## Design Approach

**Aesthetic**: Clean black with neon accents (lime & magenta)—fast-paced, no-nonsense, dynamic  
**Typography**: Bold, geometric sans-serif for impact  
**Layout**: Asymmetrical, left-aligned with accent panels that break rhythm  
**Tone**: Energetic and purposeful—mirrors the intensity of running

## Key Features

✓ **Responsive design** – Works beautifully on desktop, tablet, and mobile  
✓ **Animated progress tracking** – Real-time fundraising stats with smooth animations  
✓ **Fast, slick aesthetic** – Black backgrounds, neon lime (#00FF41) & magenta (#FF006E) highlights  
✓ **Call-to-action focus** – Multiple donation entry points throughout  
✓ **Impact-driven content** – Sections highlighting the vehicle's real purpose  
✓ **Navigation** – Fixed header for easy access to key sections  
✓ **Optimised for sharing** – Open Graph meta tags for social media

## Sections

1. **Navigation** – Logo and donate link
2. **Hero** – Bold headline, key message, dual CTA buttons
3. **Progress** – Visual fundraising progress, current total, remaining amount
4. **The Challenge** – 10-mile run with toy truck, impact, terrain details
5. **Why It Matters** – Stats on impact: 300+ trained leaders, 18 locations, savings, eternal value
6. **The Vehicle** – Mahindra Scorpio specs and features
7. **Serving Communities** – Partnership info and charity integration
8. **Call to Action** – Primary donation and engagement section
9. **Footer** – Links, contact, social

## Customisation Guide

### Update Fundraising Totals
In the `<script>` section at the bottom, update this line:
```javascript
const currentRaised = 3840; // Change this to your current amount (in £)
const target = 8825; // Change this to your target (in £)
```

### Update Donation Link
Replace the `givealittle.co` URLs with your actual fundraising platform link:
```html
<a href="YOUR_FUNDRAISING_LINK_HERE" class="btn btn-primary">Donate Now</a>
```

### Update Contact Information
Update the footer with your actual contact details:
```html
<a href="mailto:your-email@example.com">Email</a>
```

### Customise Colours
Edit the CSS variables at the top of the `<style>` section:
```css
:root {
  --neon-lime: #00FF41;      /* Bright green highlight */
  --neon-magenta: #FF006E;   /* Pink/red highlight */
  --neon-cyan: #00D9FF;      /* Bright blue highlight */
}
```

### Add Your Own Images
The current version uses semantic icons (emoji). To add hero images:
1. Find this line in the HTML: `<section class="hero">`
2. Add a `background-image` property to the `.hero` class in CSS:
```css
.hero {
  background-image: url('path/to/your-image.jpg');
  background-size: cover;
  background-position: center;
}
```

## How It Works

- **Animation on Load**: Numbers animate smoothly when the page loads
- **Progress Bar**: Shows 65% completion (based on your current £3,840 raised of £8,825)
- **Hover Effects**: Cards and buttons respond to interaction
- **Smooth Scrolling**: Navigation links smoothly scroll to sections

## Performance & Best Practices

- Minimal JavaScript—only handles animations and number counting
- No external dependencies—pure HTML/CSS/JS
- Optimised for all screen sizes
- Accessibility-friendly (semantic HTML, visible focus states)
- Fast loading (no large image assets required initially)

## Deployment

1. **Simple hosting**: Upload the `.html` file to any web host
2. **Custom domain**: Point your domain to the hosting location
3. **Social sharing**: The Open Graph meta tags help when sharing on Facebook, Twitter, etc.
4. **Live updates**: Update the `currentRaised` value in JavaScript to reflect real donations

## Things to Personalise

- Hero headline (currently: "Running with Purpose – Delivering Real Change")
- Social media links (currently placeholder)
- Contact email address
- Fundraising platform link
- Any specific location or date details for the Great South Run

## File Structure

```
gsr_campaign.html  ← Single HTML file (no external dependencies)
```

That's it! Just one file. No CSS files, no JavaScript files to manage. Everything is self-contained.

---

**Good luck with your run! Every step powers real change in Nepal.** 🏃‍♂️🚙

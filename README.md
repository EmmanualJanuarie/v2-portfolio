# IT Professional Portfolio

A responsive, single-page IT portfolio built with plain HTML, CSS, and JavaScript. There are no build tools, package installs, or third-party JavaScript dependencies.

## View locally

Open `index.html` in a browser. For a local HTTP server, run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Personalize the content

Search `index.html` for bracketed text such as `[City, Country]` and replace it with accurate details. Update the page title and meta description, name in the header/footer, contact information, certifications, education, and experience. Keep project outcomes factual and remove any lab placeholders that are not relevant.

The email address and LinkedIn/GitHub profile details are placeholders. Replace them before publishing. Unavailable profile URLs are shown as text rather than fake links.

## Add real documents

The Documents section currently contains no download links because no files were supplied. Add real files under a `documents/` directory, then replace the note in the Documents section with links, for example:

```html
<a class="button button-primary" href="documents/your-name-cv.pdf" download>Download CV</a>
```

Only add links after the corresponding file exists. Use a verified credential URL for certification links and working repository/demo URLs for project links.

## Files

- `index.html` — semantic page structure and portfolio content
- `styles.css` — responsive layout, typography, color, and accessibility states
- `script.js` — mobile navigation and current footer year

The mobile navigation supports keyboard interaction, and the stylesheet respects reduced-motion preferences. Google Fonts are optional; system font fallbacks are included.

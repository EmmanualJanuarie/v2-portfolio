# Junior C# / .NET Developer Portfolio

A responsive, single-page junior C# / .NET developer portfolio built with plain HTML, CSS, and JavaScript. There are no build tools, package installs, or third-party JavaScript dependencies.

## View locally

Open `index.html` in a browser. For a local HTTP server, run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Personalize the content

Search `index.html` for bracketed text such as `[City, Country]` and replace it with accurate details. Update the page title and meta description, contact information, certifications, education, and experience. Replace each project `[MMM YYYY – MMM YYYY]` timeframe with its actual start and end month, or use `[MMM YYYY – Present]` for ongoing work. The .NET starter projects are examples to build out: keep the placeholder label until the project exists, then replace the planned brief with accurate implementation details and outcomes.

The email address and LinkedIn/GitHub profile details are placeholders. Replace them before publishing. Unavailable profile URLs are shown as text rather than fake links.

Add a credential verification URL to the matching entry in `credentialLinks` in `script.js`. The **View credential** text link appears after the provider and completion date when a valid URL is configured.

## Add project links and proof media

Project action links are configured in `script.js` in the `projectLinks` object. Set each project's `repository` and `liveSite` values to its real HTTPS URL. The matching action becomes a link that opens in a new tab. Leave a value empty when no real destination exists; its control remains visibly unavailable.

Proof & media always opens `proof.html` in a new tab, with a breadcrumb back to that project. Add screenshots and videos under `assets/proof/` (project subfolders are optional), then register them in the matching project's `media` array in `proof.js`. Supported types are `image` and `video`. Example:

```js
{ type: "image", src: "assets/proof/udes/dashboard.png", alt: "UDES evidence dashboard", title: "Evidence dashboard", caption: "Synthetic demonstration data." },
{ type: "video", src: "assets/proof/udes/workflow.mp4", title: "Evidence upload workflow", caption: "A short walkthrough using synthetic data." },
```

Use accurate image alt text and captions. Do not publish private screenshots, credentials, customer information, or sensitive system details. The proof page displays an empty state until media is registered, so there are no broken image or video links.

## Add real documents

The Documents section currently contains no download links because no files were supplied. Add real files under a `documents/` directory, then replace the note in the Documents section with links, for example:

```html
<a class="button button-primary" href="documents/your-name-cv.pdf" download>Download CV</a>
```

Only add links after the corresponding file exists. Use a verified credential URL for certification links and working repository/demo URLs for project links.

## Files

- `index.html` — semantic page structure and portfolio content
- `styles.css` — responsive layout, typography, color, and accessibility states
- `script.js` — mobile navigation, footer year, and project link configuration
- `proof.html` / `proof.css` / `proof.js` — project proof pages and media gallery

The mobile navigation supports keyboard interaction, and the stylesheet respects reduced-motion preferences. Google Fonts are optional; system font fallbacks are included.

# Emmanual Januarie — SOC Analyst Portfolio

A responsive, static portfolio built with HTML, CSS, and vanilla JavaScript. It contains profile information, current learning areas, authorised lab report templates, existing certifications, education, resume, and contact links. No build tools or paid services are required.

## Preview

Open `index.html` in a browser, or serve the directory locally:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update content

- Edit the page sections and contact details in `index.html`.
- Edit lab summaries, repository URLs, and report template fields in `lab-data.js`.
- A lab's GitHub button is enabled only when its `repository` value contains a valid HTTPS URL.
- Investigation reports open from `lab-report.html?lab=<lab-id>` and use the matching data in `lab-data.js`.
- Replace bracketed report prompts with observations from completed, authorised exercises. Keep a report marked incomplete until it contains reviewed evidence.
- Do not publish credentials, personal data, customer data, or information from systems you are not authorised to assess.

## Files

- `index.html` — one-page portfolio
- `styles.css` — responsive portfolio styles
- `script.js` — mobile navigation and lab list rendering
- `lab-data.js` — lab summaries and structured report templates
- `lab-report.html`, `lab-report.css`, `lab-report.js` — individual investigation report pages
- `documents/emmanual-januarie-resume.pdf` — resume download

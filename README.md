# SOC Analyst Portfolio

A responsive static portfolio for Emmanual Januarie, an aspiring entry-level SOC Analyst in South Africa. It uses HTML, CSS, and JavaScript with no build step, third-party runtime, API key, or paid service.

## Preview

Open `index.html` in a browser. To serve it locally, run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Update portfolio content

- Edit profile, skills, education, experience, and contact details in `index.html`.
- Edit investigation, detection-rule, and lab-note templates in the data arrays in `script.js`.
- Investigation summaries on the home page link to full report templates in `investigation-report.html`. Add a verified, sanitised GitHub repository URL to the matching investigation's `repository` value in `script.js` to enable its repository button.
- Detection-rule and lab-note templates use shared accessible disclosure components.
- Replace bracketed text only with your own verified exercise information. Leave a template clearly marked incomplete until you have completed and reviewed it.
- Detection query text is a placeholder, not validated logic. Document test method and actual results only after testing with authorised data.

## Add lab evidence

Place authorised, sanitised screenshots or videos under `assets/proof/<lab-id>/`, then register each item in the matching record in `proof.js`. The media page opens in a new tab and links back to the related investigation. Do not publish credentials, private data, or sensitive system information.

## Existing profile details

The site uses information already present in the portfolio: IT: Systems Development at CTU Training Solutions (Feb 2023–Nov 2024), Junior Software Developer Intern at Kore Business Solutions (Aug–Nov 2025), and the two Microsoft cloud/developer credentials. The internship is labelled as software development experience, not SOC work. No lab findings or tested detection results are included.

## Files

- `index.html` — portfolio structure and verified profile details
- `styles.css` — restrained navy, white, and steel-blue visual style with responsive layout
- `script.js` — reusable investigation, detection-rule, and lab-note templates
- `investigation-report.html`, `investigation-report.css`, `investigation-report.js` — structured, printable investigation reports populated from the shared templates
- `proof.html`, `proof.css`, `proof.js` — lab evidence gallery and accessible media viewer
- `documents/` — existing resume download

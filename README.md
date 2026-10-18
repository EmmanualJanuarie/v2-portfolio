# Emmanual Januarie — Cybersecurity Portfolio

A responsive, one-page portfolio presenting an early-career move toward cybersecurity operations. It distinguishes authorised practice and ongoing study from professional experience. The site uses plain HTML, CSS, and JavaScript; it has no build step or third-party JavaScript dependencies.

## View locally

Open `index.html` in a browser. To use a local HTTP server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Add security practice reports

The portfolio currently has an honest placeholder for lab write-ups. Add a report only after completing the exercise and reviewing what can safely be shared. Do not present simulated activity as production SOC work. A report should include:

1. Scenario, scope, and authorised lab/data source
2. Investigation steps and relevant observations
3. Evidence with timestamps or a short timeline where available
4. Conclusion, separating observed facts from possible explanations
5. Recommended next steps or escalation, including uncertainty
6. Lessons learned and what you would improve

Keep credentials, personal data, and sensitive system details out of public reports. Update `index.html` to add each completed report; use concise facts and link to a separate report page or repository where useful.

## Maintain the portfolio

- Edit content and section structure in `index.html`.
- Edit layout, responsive rules, and accessible focus states in `styles.css`.
- Edit navigation, project links, and credential links in `script.js`.
- Add project screenshots or videos under `assets/proof/<project-id>/` and register them in `proof.js`.
- Keep the software development internship and independent software project clearly labelled as transferable background, not cybersecurity employment.
- The current downloadable resume reflects the software development background. Replace it with an accurate security-operations-focused resume before using it for SOC applications.

Project repository/demo URLs and Microsoft credential verification URLs are configured in `script.js`. Only publish links that resolve to the intended public destination. Proof media should use synthetic or otherwise authorised data.

## Files

- `index.html` — one-page portfolio content
- `styles.css` — design system and responsive layout
- `script.js` — navigation, project links, and credential links
- `proof.html`, `proof.css`, `proof.js` — project proof gallery and accessible media viewer
- `documents/` — downloadable documents

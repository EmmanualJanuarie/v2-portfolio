"use strict";

function createReportElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderLabReport(lab) {
  document.title = `${lab.title} | SOC Lab Report`;
  document.querySelector("#report-title").textContent = lab.title;
  document.querySelector("#report-summary").textContent = lab.summary;
  document.querySelector("#report-breadcrumb").textContent = lab.title;

  const sections = document.querySelector("#report-sections");
  const index = document.querySelector("#report-index-links");

  lab.sections.forEach((group, groupIndex) => {
    const sectionId = `report-section-${groupIndex + 1}`;
    const section = createReportElement("section", "report-section");
    section.id = sectionId;

    const heading = createReportElement("div", "report-section-heading");
    heading.append(
      createReportElement("span", "report-section-number", String(groupIndex + 1).padStart(2, "0")),
      createReportElement("h2", "", group.title),
    );
    section.append(heading);

    group.fields.forEach(([label, text]) => {
      const field = createReportElement("article", "report-field");
      field.append(
        createReportElement("h3", "", label),
        createReportElement("p", "report-placeholder", text),
      );
      section.append(field);
    });

    sections.append(section);

    const link = createReportElement("a", "", `${String(groupIndex + 1).padStart(2, "0")}  ${group.title}`);
    link.href = `#${sectionId}`;
    index.append(link);
  });
}

function renderMissingReport() {
  document.title = "Report not found | Emmanual Januarie";
  document.querySelector("#report-title").textContent = "Report not found";
  document.querySelector("#report-breadcrumb").textContent = "Not found";
  document.querySelector("#report-summary").textContent = "This report link is not recognised. Return to Lab Work and select an investigation template.";
  document.querySelector(".report-template-status").textContent = "NO REPORT SELECTED";
  document.querySelector(".report-metadata").hidden = true;
  document.querySelector(".handling-note").hidden = true;
  document.querySelector(".report-index").hidden = true;
  document.querySelector("#report-sections").append(createReportElement("p", "report-missing", "No report is available for this link."));
}

const labId = new URLSearchParams(window.location.search).get("lab");
const lab = Array.isArray(window.SOC_LABS) ? window.SOC_LABS.find((item) => item.id === labId) : null;

if (lab) renderLabReport(lab);
else renderMissingReport();
